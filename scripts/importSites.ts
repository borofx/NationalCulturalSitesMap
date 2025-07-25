import xlsx from 'xlsx';
import fetch from 'node-fetch';
import { getClient } from '../src/app/lib/db';
import dotenv from 'dotenv';

dotenv.config();

interface SiteRow {
  Name: string;
  Description?: string;
  Address: string;
  Municipality: string;
  Ownership?: string;
  Condition?: string;
}

async function geocode(address: string): Promise<{ lat: number; lon: number } | null> {
  const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);

  const data = (await res.json()) as { lat: string; lon: string }[];

  if (!data[0]) return null;

  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon),
  };
}



async function run() {
  const client = getClient();
  await client.connect();

  const workbook = xlsx.readFile('./data/sites.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = xlsx.utils.sheet_to_json<SiteRow>(sheet); // Type it properly

  for (const row of jsonData) {
    if (!row.Name || !row.Address || !row.Municipality) continue;

    const fullAddress = `${row.Address}, ${row.Municipality}, Bulgaria`;
    const coords = await geocode(fullAddress);
    if (!coords) {
      console.warn('Could not geocode:', fullAddress);
      continue;
    }

    await client.query(
      'INSERT INTO sites (name, description, address, municipality, ownership, condition, latitude, longitude) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
      [
        row.Name,
        row.Description || '',
        row.Address,
        row.Municipality,
        row.Ownership || '',
        row.Condition || '',
        coords.lat,
        coords.lon,
      ]
    );

    console.log(`✅ Inserted: ${row.Name}`);
  }

  await client.end();
}

run();

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';
import pdfParse from 'pdf-parse';

type LetterChunk = {
  id: string;
  text: string;
  metadata: {
    source: string;
    year: string | number;
  };
};

const LETTERS_DIR = './letters';

function detectYear(filename: string): string | number {
  const match = filename.match(/(\d{4})/);
  return match && match[1] !== undefined ? match[1] : 'unknown';
}

async function pdfToText(filePath: string): Promise<string> {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
}

function chunkText(text: string, size = 1000, overlap = 180): string[] {
  const chunks: string[] = [];
  let i = 0;
  while (i < text.length) {
    chunks.push(text.slice(i, i + size));
    i += size - overlap;
  }
  return chunks;
}

async function main() {
  const allChunks: LetterChunk[] = [];
  const files = fs.readdirSync(LETTERS_DIR);

  for (const file of files) {
    const filePath = path.join(LETTERS_DIR, file);
    const year = detectYear(file);
    const text = await pdfToText(filePath);

    const chunks = chunkText(text, 1000, 180);

    for (let i = 0; i < chunks.length; i++) {
      allChunks.push({
        id: nanoid(),
        text: chunks[i] ?? '',
        metadata: { source: file, year },
      });
    }
  }

 
  console.log(`Ingested chunks: ${allChunks.length}`);
  
  fs.writeFileSync('chunks.json', JSON.stringify(allChunks, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
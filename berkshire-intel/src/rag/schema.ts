export type LetterChunkMeta = {
source: string; 
year: number; 
page?: number; 
};


export type LetterChunk = {
id: string;
text: string;
metadata: LetterChunkMeta;
};
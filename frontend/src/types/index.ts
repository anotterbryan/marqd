export interface MarqLocation {
  lat: number;
  lng: number;
  city: string;
  country: string;
  count: number;
}

export interface ArchiveEntryData {
  recordNumber: string;
  city: string;
  country: string;
  date: string;
  setting: string;
  mood: string;
  excerpt: string;
  tags: string[];
  audioPlaceholder: boolean;
  photoCount: number;
  readTime: string;
  reactions: {
    fire: number;
    eyes: number;
    comment: number;
    lips: number;
  };
}

export interface Software {
  id: string;
  order: number;
  title: string;
  tagline: string;
  lede: string;
  category: string;
  version: string;
  released: string;
  size: string;
  downloadUrl: string;
  featured: boolean;
  docsUrl?: string;
  screenshots?: Array<{
    src: string;
    alt: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  changelog: Array<{
    version: string;
    date: string;
    title: string;
    downloadUrl?: string;
    added?: string[];
    improved?: string[];
    fixed?: string[];
  }>;
}
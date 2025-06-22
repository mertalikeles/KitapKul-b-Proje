export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  genre: string;
  publishYear: number;
  rating: number;
  pages: number;
  coverUrl: string;
  isbn?: string;
  language?: string;
}

export interface BookFormData {
  title: string;
  author: string;
  description: string;
  genre: string;
  publishYear: number;
  pages: number;
  coverUrl: string;
  isbn?: string;
  language?: string;
}

export interface BookFilters {
  search: string;
  genre: string;
  sortBy: 'title' | 'author' | 'rating' | 'publishYear';
  sortOrder: 'asc' | 'desc';
}
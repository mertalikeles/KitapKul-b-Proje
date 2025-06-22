import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Book, BookFilters } from '../types/book';
import { mockBooks } from '../data/mockBooks';

interface BookState {
  books: Book[];
  favorites: string[];
  filters: BookFilters;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  addBook: (book: Omit<Book, 'id'>) => void;
  removeBook: (id: string) => void;
  toggleFavorite: (id: string) => void;
  setFilters: (filters: Partial<BookFilters>) => void;
  getBookById: (id: string) => Book | undefined;
  getFavoriteBooks: () => Book[];
  getFilteredBooks: () => Book[];
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useBookStore = create<BookState>()(
  persist(
    (set, get) => ({
      books: mockBooks,
      favorites: [],
      filters: {
        search: '',
        genre: '',
        sortBy: 'title',
        sortOrder: 'asc',
      },
      isLoading: false,
      error: null,

      addBook: (bookData) => {
        const newBook: Book = {
          ...bookData,
          id: Date.now().toString(),
        };
        set((state) => ({
          books: [...state.books, newBook],
        }));
      },

      removeBook: (id) => {
        set((state) => ({
          books: state.books.filter((book) => book.id !== id),
          favorites: state.favorites.filter((favId) => favId !== id),
        }));
      },

      toggleFavorite: (id) => {
        set((state) => {
          const isFavorite = state.favorites.includes(id);
          return {
            favorites: isFavorite
              ? state.favorites.filter((favId) => favId !== id)
              : [...state.favorites, id],
          };
        });
      },

      setFilters: (newFilters) => {
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        }));
      },

      getBookById: (id) => {
        return get().books.find((book) => book.id === id);
      },

      getFavoriteBooks: () => {
        const { books, favorites } = get();
        return books.filter((book) => favorites.includes(book.id));
      },

      getFilteredBooks: () => {
        const { books, filters } = get();
        let filteredBooks = [...books];

        // Search filter
        if (filters.search) {
          const searchLower = filters.search.toLowerCase();
          filteredBooks = filteredBooks.filter(
            (book) =>
              book.title.toLowerCase().includes(searchLower) ||
              book.author.toLowerCase().includes(searchLower) ||
              book.genre.toLowerCase().includes(searchLower)
          );
        }

        // Genre filter - URL parametresinden de kontrol et
        const urlParams = new URLSearchParams(window.location.search);
        const urlGenre = urlParams.get('genre');
        const activeGenre = urlGenre || filters.genre;
        
        if (activeGenre) {
          filteredBooks = filteredBooks.filter((book) => book.genre === activeGenre);
        }

        // Sort
        filteredBooks.sort((a, b) => {
          let aValue: string | number = a[filters.sortBy];
          let bValue: string | number = b[filters.sortBy];

          if (typeof aValue === 'string') {
            aValue = aValue.toLowerCase();
            bValue = (bValue as string).toLowerCase();
          }

          if (filters.sortOrder === 'asc') {
            return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
          } else {
            return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
          }
        });

        return filteredBooks;
      },

      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: 'book-store',
      partialize: (state) => ({
        books: state.books,
        favorites: state.favorites,
      }),
    }
  )
);
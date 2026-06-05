import { create } from 'zustand';

export type ThemeMode = 'dark' | 'light';

interface UIState {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const initialTheme = typeof window !== 'undefined' ? ((localStorage.getItem('ui-theme') as ThemeMode) ?? 'light') : 'light';

export const useUIStore = create<UIState>((set) => ({
  theme: initialTheme,
  toggleTheme: () =>
    set((state) => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        localStorage.setItem('ui-theme', nextTheme);
      }
      return { theme: nextTheme };
    }),
}));

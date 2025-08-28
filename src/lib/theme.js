import { writable } from 'svelte/store';
import { browser } from '$app/environment';

/**
 * A custom type definition for the theme.
 * @typedef {'light' | 'dark'} Theme
 */

/**
 * A helper function to validate the theme value from localStorage.
 * @param {string | null} value
 * @returns {Theme}
 */
const getValidTheme = (value) => {
  return value === 'light' ? 'light' : 'dark';
};

const initialTheme = browser ? getValidTheme(window.localStorage.getItem('theme')) : 'dark';

/**
 * A writable Svelte store that holds the current theme state.
 * @type {import('svelte/store').Writable<Theme>}
 */
export const theme = writable(initialTheme);

if (browser) {
  theme.subscribe((value) => {
    window.localStorage.setItem('theme', value);
  });
}
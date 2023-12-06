export const MAIN_MENU_FOLDER = "Components/Main Menu Parts";

export const THEME_OPTIONS = {
  light: "light",
  dark: "dark",
};

// This array controls the order of content in this app.
// The string values should each match a Firebase document name
// within the main-content collection.
export const FIREBASE_DOC_ORDER = [
  "intro",
  "part1-chapter0",
  "part1-chapter1",
  "part1-chapter2",
  "part1-chapter3-1",
  "part1-chapter3-2",
  "part1-chapter3-3",
  "part1-chapter4",
  "part1-chapter5-1",
  "part1-chapter5-2",
  "part1-chapter5-3",
  "part2-chapter1",
  "part2-chapter2",
];

// This should match the name of the array in Firestore
// within the main-content collection, chapter document
export const CONTENT_ARRAY_NAME = "contentBlocks";

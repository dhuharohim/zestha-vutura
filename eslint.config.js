import { ESLint } from "eslint";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import astroEslintParser from "astro-eslint-parser";

export default [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      "no-unused-vars": "off", // Disable for JavaScript
      "@typescript-eslint/no-unused-vars": "off", // Disable for TypeScript
    },
  },
  {
    files: ["*.astro"],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: typescriptParser,
      },
    },
    rules: {
      // Additional rules specific to .astro files
    },
  },
];

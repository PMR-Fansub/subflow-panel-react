// @ts-check

import url from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import deprecationPlugin from "eslint-plugin-deprecation";
import eslintCommentsPlugin from "eslint-plugin-eslint-comments";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default tseslint.config(
  {
    plugins: {
      ["@next/next"]: nextPlugin,
      ["@typescript-eslint"]: tseslint.plugin,
      ["deprecation"]: deprecationPlugin,
      ["eslint-comments"]: eslintCommentsPlugin,
      ["import"]: importPlugin,
      ["jsx-a11y"]: jsxA11yPlugin,
      ["react"]: reactPlugin,
      ["react-hooks"]: reactHooksPlugin,
      ["simple-import-sort"]: simpleImportSortPlugin,
      ["unicorn"]: unicornPlugin
    }
  },

  {
    ignores: ["**node_modules/**", ".next/**"]
  },

  // extends
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,

  // base config
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["tsconfig.json"],
        tsconfigRootDir: __dirname
      }
    },
    rules: {
      "deprecation/deprecation": "error",

      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }
      ],

      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
      "logical-assignment-operators": "error",
      "no-else-return": "error",
      "no-mixed-operators": "error",

      "eslint-comments/disable-enable-pair": [
        "error",
        { allowWholeFile: true }
      ],
      "eslint-comments/no-duplicate-disable": "error",
      "eslint-comments/no-unused-disable": "error",
      "eslint-comments/no-unused-enable": "error",

      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-absolute-path": "error",
      "import/no-amd": "error",
      "import/no-duplicates": "error",

      "simple-import-sort/imports": "error",

      "unicorn/no-typeof-undefined": "error"
    }
  },

  // js/jsx config
  {
    files: ["**/*.js", "**/*.jsx"],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      "deprecation/deprecation": "off",
      "@typescript-eslint/explicit-function-return-type": "off"
    }
  },

  // src config
  {
    files: ["src/**/*.{ts,tsx,mts,cts,js,jsx}"],
    extends: [
      ...compat.config(jsxA11yPlugin.configs.recommended),
      ...compat.config(reactPlugin.configs.recommended),
      ...compat.config(reactHooksPlugin.configs.recommended)
    ],
    rules: {
      ...jsxA11yPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
);

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    ignores: ["dist/", "node_modules/"], 
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginJest.configs.recommended.rules,
    },
    plugins: {
      jest: pluginJest,
    },
  },
];

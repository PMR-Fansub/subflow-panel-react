export default {
  "*.{json,md,mdx,css}": ["prettier --write"],
  "*.{ts,mts,cts,tsx,js,mjs,cjs,jsx}": ["eslint --fix", "prettier --write"]
};

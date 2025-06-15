export default {
  '*': ['pnpm lint:prettier', 'pnpm lint:eslint'],
  '*.{ts,tsx}': () => 'tsc --noEmit',
}

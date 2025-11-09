import { defineConfig } from 'vitest/config';

// biome-ignore lint/style/noDefaultExport: vitest config
export default defineConfig({
  test: {
    testTimeout: 5_000,
    coverage: {
      reporter: ['json-summary'],
      include: ['src/**/*.ts'],
      exclude: ['dist'],
    },
  },
});

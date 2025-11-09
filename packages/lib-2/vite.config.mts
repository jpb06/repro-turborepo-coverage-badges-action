import { defineConfig } from 'vitest/config';

// biome-ignore lint/style/noDefaultExport: vitest config
export default defineConfig({
  test: {
    testTimeout: 5_000,
    coverage: {
      reporter: ['text', 'json-summary'],
      include: ['src/**/*.ts'],
      exclude: ['dist'],
    },
  },
});

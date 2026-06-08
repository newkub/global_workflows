export default {
  entry: [
    './src/index.ts',
    './src/presentation/cli/check-unused-workflows.ts',
    './src/presentation/cli/check-file-length.ts',
  ],
  format: ['esm'],
  dts: true,
};

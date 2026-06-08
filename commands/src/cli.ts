#!/usr/bin/env bun
import { cac } from 'cac';
import { join } from 'node:path';
import { CheckLocCLI, WorkflowAnalyzer } from './modules/check-unused-workflows/index';
import { FileLengthCLI, FileLengthAnalyzer } from './modules/check-file-length/index';
import { FileSystemAdapter } from './adapters/filesystem/index';

const cli = cac('global-workflows');

// Get workflows path from environment variable or use default
const GLOBAL_WORKFLOWS_PATH =
  process.env.GLOBAL_WORKFLOWS_PATH || join(process.cwd(), '..');

// Initialize adapters
const fsAdapter = new FileSystemAdapter(GLOBAL_WORKFLOWS_PATH);

// Command: check-unused-workflows
cli.command('check-unused-workflows', 'Check for unused workflows').action(() => {
  const analyzer = new WorkflowAnalyzer();
  const cliInstance = new CheckLocCLI(analyzer);

  const files = fsAdapter.readDirectory();
  const fileContents = fsAdapter.readMarkdownFiles();
  const results = analyzer.checkUnusedWorkflows(files, fileContents);

  cliInstance.displayReport(results);
});

// Command: check-file-length
cli
  .command('check-file-length', 'Check files exceeding threshold')
  .option('--threshold <number>', 'Maximum allowed line count', { default: 250 })
  .action((options: { threshold?: number; }) => {
    const analyzer = new FileLengthAnalyzer(options.threshold);
    const cliInstance = new FileLengthCLI(analyzer);

    const fileContents = fsAdapter.readMarkdownFiles();
    const results = analyzer.checkFilesLength(fileContents);

    cliInstance.displayReport(results);
  });

cli.help();
cli.parse();

// Show help if no command provided
if (!process.argv.slice(2).length) {
  cli.outputHelp();
}

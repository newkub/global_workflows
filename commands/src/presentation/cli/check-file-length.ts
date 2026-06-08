import { join } from "node:path";
import { FileLengthCLI, FileLengthAnalyzer } from "../../modules/check-file-length/index";
import { FileSystemAdapter } from "../../adapters/filesystem/index";

// Get workflows path from environment variable or use default
const GLOBAL_WORKFLOWS_PATH =
  process.env.GLOBAL_WORKFLOWS_PATH || join(process.cwd(), "..");

// Initialize adapters and services
const fsAdapter = new FileSystemAdapter(GLOBAL_WORKFLOWS_PATH);
const analyzer = new FileLengthAnalyzer(250);
const cli = new FileLengthCLI(analyzer);

// Load files and analyze
const fileContents = fsAdapter.readMarkdownFiles();
const results = analyzer.checkFilesLength(fileContents);

// Display report
cli.displayReport(results);

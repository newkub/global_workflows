import { join } from "node:path";
import { CheckLocCLI, WorkflowAnalyzer } from "../../modules/check-unused-workflows/index";
import { FileSystemAdapter } from "../../adapters/filesystem/index";

// Get workflows path from environment variable or use default
const GLOBAL_WORKFLOWS_PATH =
  process.env.GLOBAL_WORKFLOWS_PATH || join(process.cwd(), "..");

// Initialize adapters and services
const fsAdapter = new FileSystemAdapter(GLOBAL_WORKFLOWS_PATH);
const analyzer = new WorkflowAnalyzer();
const cli = new CheckLocCLI(analyzer);

// Load files and analyze
const files = fsAdapter.readDirectory();
const fileContents = fsAdapter.readMarkdownFiles();
const results = analyzer.checkUnusedWorkflows(files, fileContents);

// Display report
cli.displayReport(results);

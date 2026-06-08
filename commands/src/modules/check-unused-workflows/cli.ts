import type { WorkflowReference } from './types';
import type { WorkflowAnalyzer } from './workflow-analyzer';

export class CheckLocCLI {
  constructor (private analyzer: WorkflowAnalyzer) { }

  /**
   * Display report
   */
  displayReport(results: WorkflowReference[]): void {
    const unused = this.analyzer.groupUnusedWorkflows(results);

    console.log('='.repeat(80));
    console.log('Report: Unused Workflows');
    console.log('='.repeat(80));
    console.log();

    if (unused.length === 0) {
      console.log('✅ No unused workflows found');
      console.log();
      return;
    }

    console.log(`Found ${unused.length} unused workflows:\n`);
    unused.forEach(workflow => {
      console.log(`- ${workflow.name}`);
    });
    console.log();
  }
}

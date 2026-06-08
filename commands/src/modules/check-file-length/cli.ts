import type { FileLengthResult } from './types';
import type { FileLengthAnalyzer } from './analyzer';

export class FileLengthCLI {
  constructor (private analyzer: FileLengthAnalyzer) { }

  /**
   * Display report
   */
  displayReport(results: FileLengthResult[]): void {
    const tooLongFiles = this.analyzer.filterTooLongFiles(results);

    console.log('='.repeat(80));
    console.log('Report: Files exceeding threshold');
    console.log('='.repeat(80));
    console.log();

    if (tooLongFiles.length === 0) {
      console.log('No files exceeding threshold found');
      return;
    }

    console.log(`Found ${tooLongFiles.length} files exceeding threshold:\n`);

    for (const file of tooLongFiles) {
      console.log(`- ${file.filename} (${file.lineCount} lines)`);
    }
  }
}

import type { FileLengthResult } from './types';

export class FileLengthAnalyzer {
  constructor (private threshold: number = 250) { }

  /**
   * Check file length
   */
  checkFileLength(filename: string, content: string): FileLengthResult {
    const lineCount = content.split('\n').length;
    const isTooLong = lineCount > this.threshold;

    return {
      filename,
      lineCount,
      isTooLong,
      threshold: this.threshold,
    };
  }

  /**
   * Check file length for multiple files
   */
  checkFilesLength(files: Map<string, string>): FileLengthResult[] {
    const results: FileLengthResult[] = [];

    for (const [filename, content] of files.entries()) {
      results.push(this.checkFileLength(filename, content));
    }

    return results;
  }

  /**
   * Filter files exceeding threshold
   */
  filterTooLongFiles(results: FileLengthResult[]): FileLengthResult[] {
    return results.filter((r) => r.isTooLong);
  }
}

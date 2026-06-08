import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export class FileSystemAdapter {
  constructor (private basePath: string) { }

  /**
   * Read all files in directory
   */
  readDirectory(): string[] {
    return readdirSync(this.basePath);
  }

  /**
   * Read file content
   */
  readFile(filename: string): string {
    const filePath = join(this.basePath, filename);
    return readFileSync(filePath, "utf-8");
  }

  /**
   * Read all markdown files with content
   */
  readMarkdownFiles(): Map<string, string> {
    const files = this.readDirectory();
    const fileContents = new Map<string, string>();

    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const content = this.readFile(file);
      fileContents.set(file, content);
    }

    return fileContents;
  }
}

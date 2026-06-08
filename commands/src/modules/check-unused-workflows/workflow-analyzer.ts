import type { WorkflowReference } from "./types";

export class WorkflowAnalyzer {

  /**
   * Collect all workflows in global_workflows
   */
  getAllWorkflows(workflowFiles: string[]): string[] {
    return workflowFiles
      .filter((file) => file.endsWith(".md") && file !== "README.md")
      .map((file) => file.replace(".md", ""))
      .map((name) => `/${name}`);
  }

  /**
   * Find workflow references in all files
   */
  findReferences(
    workflowName: string,
    files: string[],
    fileContents: Map<string, string>,
  ): { count: number; referencedBy: string[]; } {
    const references: string[] = [];

    for (const file of files) {
      if (!file.endsWith(".md")) continue;

      const content = fileContents.get(file);
      if (!content) continue;

      // Search for references in different formats
      const patterns = [
        new RegExp(`\\${workflowName}`, "g"),
        new RegExp(`@\\[${workflowName.substring(1)}\\]`, "g"),
        new RegExp(`/${workflowName.replace("/", "")}`, "g"),
      ];

      for (const pattern of patterns) {
        if (pattern.test(content)) {
          if (!references.includes(file)) {
            references.push(file);
          }
        }
      }
    }

    // Exclude self-reference
    const selfReferenceIndex = references.indexOf(
      `${workflowName.substring(1)}.md`,
    );
    if (selfReferenceIndex > -1) {
      references.splice(selfReferenceIndex, 1);
    }

    return {
      count: references.length,
      referencedBy: references,
    };
  }

  /**
   * Check for unused workflows
   */
  checkUnusedWorkflows(
    files: string[],
    fileContents: Map<string, string>,
  ): WorkflowReference[] {
    const workflows = this.getAllWorkflows(files);
    const results: WorkflowReference[] = [];

    for (const workflow of workflows) {
      const { count, referencedBy } = this.findReferences(
        workflow,
        files,
        fileContents,
      );

      results.push({
        name: workflow,
        references: count,
        referencedBy,
      });
    }

    return results;
  }

  /**
   * Group unused workflows
   */
  groupUnusedWorkflows(results: WorkflowReference[]): WorkflowReference[] {
    return results.filter((result) => result.references === 0);
  }
}

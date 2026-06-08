export interface WorkflowReference {
  name: string;
  references: number;
  referencedBy: string[];
}

export interface WorkflowAnalyzerConfig {
  workflowsPath: string;
}

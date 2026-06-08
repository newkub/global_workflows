import { describe, it, expect } from 'vitest';
import { WorkflowAnalyzer } from '../workflow-analyzer';
import type { WorkflowReference } from '../types';

describe('WorkflowAnalyzer', () => {
  let analyzer: WorkflowAnalyzer;

  beforeEach(() => {
    analyzer = new WorkflowAnalyzer();
  });

  describe('getAllWorkflows', () => {
    it('should filter markdown files and exclude README', () => {
      const files = ['workflow1.md', 'workflow2.md', 'README.md', 'test.txt'];
      const result = analyzer.getAllWorkflows(files);
      expect(result).toEqual(['/workflow1', '/workflow2']);
    });

    it('should return empty array if no markdown files', () => {
      const files = ['test.txt', 'data.json'];
      const result = analyzer.getAllWorkflows(files);
      expect(result).toEqual([]);
    });
  });

  describe('findReferences', () => {
    it('should find references in different formats', () => {
      const files = ['workflow1.md', 'workflow2.md'];
      const fileContents = new Map([
        ['workflow1.md', 'See /workflow2 for details'],
        ['workflow2.md', 'Some content'],
      ]);

      const result = analyzer.findReferences('/workflow2', files, fileContents);
      expect(result.count).toBe(1);
      expect(result.referencedBy).toContain('workflow1.md');
    });

    it('should exclude self-reference', () => {
      const files = ['workflow1.md'];
      const fileContents = new Map([['workflow1.md', 'This is workflow1']]);

      const result = analyzer.findReferences('/workflow1', files, fileContents);
      expect(result.count).toBe(0);
      expect(result.referencedBy).not.toContain('workflow1.md');
    });
  });

  describe('checkUnusedWorkflows', () => {
    it('should identify unused workflows', () => {
      const files = ['workflow1.md', 'workflow2.md', 'workflow3.md'];
      const fileContents = new Map([
        ['workflow1.md', 'See /workflow2'],
        ['workflow2.md', 'Content'],
        ['workflow3.md', 'No references to this'],
      ]);

      const results = analyzer.checkUnusedWorkflows(files, fileContents);
      const unused = analyzer.groupUnusedWorkflows(results);

      expect(unused.length).toBeGreaterThan(0);
      expect(unused.some(w => w.name === '/workflow3')).toBe(true);
    });
  });

  describe('groupUnusedWorkflows', () => {
    it('should filter workflows with zero references', () => {
      const results: WorkflowReference[] = [
        { name: '/workflow1', references: 1, referencedBy: ['workflow2.md'] },
        { name: '/workflow2', references: 0, referencedBy: [] },
        { name: '/workflow3', references: 0, referencedBy: [] },
      ];

      const unused = analyzer.groupUnusedWorkflows(results);
      expect(unused).toHaveLength(2);
      expect(unused.every(w => w.references === 0)).toBe(true);
    });
  });
});

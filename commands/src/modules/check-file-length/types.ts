export interface FileLengthResult {
  filename: string;
  lineCount: number;
  isTooLong: boolean;
  threshold: number;
}

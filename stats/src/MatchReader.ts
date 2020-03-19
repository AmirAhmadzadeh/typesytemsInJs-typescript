import { matchResult } from './MatchResult';
import { dataStrtoDate } from './utils';
import { match } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  public matches: match[] = [];
  constructor(public reader: DataReader) {}

  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(row => {
      return [
        dataStrtoDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as matchResult,
        row[6]
      ];
    });
  }
}

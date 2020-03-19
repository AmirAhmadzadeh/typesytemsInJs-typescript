import fs from 'fs';
import { dataStrtoDate } from '../utils';

type match = [Date, string, string, number, number, matchResult, string];

export enum matchResult {
  AwayWin = 'A',
  HomeWin = 'H',
  Draw = 'D'
}

export class CsvFileReader {
  public data: match[] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(
        (row: string[]): match => {
          return [
            dataStrtoDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as matchResult,
            row[6]
          ];
        }
      );
  }
}

import { CsvFileReader } from './CsvFileReader';
import { dataStrtoDate } from '../utils';
import { matchResult } from '../MatchResult';

type match = [Date, string, string, number, number, matchResult, string];

export class MatchcsvReader extends CsvFileReader<match> {
  mapRow(row: string[]): match {
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
}

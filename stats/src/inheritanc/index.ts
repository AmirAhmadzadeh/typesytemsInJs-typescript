import { matchResult } from '../MatchResult';
import { MatchcsvReader } from './MatchcsvReader';

let manUnitedWins = 0;
const reader = new MatchcsvReader('football.csv');
reader.read();

for (let match of reader.data) {
  if (match[1] == 'Man United' && match[5] == matchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] == 'Man United' && match[5] == matchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log('manUnited Wins Equals to : ', manUnitedWins);

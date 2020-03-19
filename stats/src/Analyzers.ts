import { Analyzer } from './Summray';
import { match } from './MatchData';
import { matchResult } from './MatchResult';

export class AvgGoalAnalysis implements Analyzer {
  constructor() {}

  run(matches: match[], teamName: string): string {
    let sumOfGoals = 0;
    let avg = 0;
    for (let match of matches) {
      if (match[1] === teamName) {
        sumOfGoals += match[3];
      } else if (match[2] === teamName) {
        sumOfGoals += match[4];
      }
    }
    avg = sumOfGoals / matches.length;
    return `Avrage Goals of ${teamName} is ${avg}`;
  }
}

export class WinsAnalyzer implements Analyzer {
  constructor() {}

  run(matches: match[]): string {
    let manUnitedWins = 0;
    for (let match of matches) {
      if (match[1] == 'Man United' && match[5] == matchResult.HomeWin) {
        manUnitedWins++;
      } else if (match[2] == 'Man United' && match[5] == matchResult.AwayWin) {
        manUnitedWins++;
      }
    }
    return `[ amir is here ] Man United wons ${manUnitedWins} times`;
  }
}

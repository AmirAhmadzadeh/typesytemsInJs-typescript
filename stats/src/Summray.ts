import { match } from './MatchData';
import { WinsAnalyzer, AvgGoalAnalysis } from './Analyzers';
import { ConsoleReport, HtmlReport } from './Reporters';

export interface Analyzer {
  run(matches: match[], teamName: string): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public output: OutputTarget) {}

  static consoleReportForWins(): Summary {
    return new Summary(new WinsAnalyzer(), new ConsoleReport());
  }

  static consoleReportForAvgGoals(): Summary {
    return new Summary(new AvgGoalAnalysis(), new ConsoleReport());
  }

  static htmlReportForWins(): Summary {
    return new Summary(new WinsAnalyzer(), new HtmlReport());
  }

  static htmlReportForAvgGoals(): Summary {
    return new Summary(new AvgGoalAnalysis(), new HtmlReport());
  }

  buildAndPrintReport(matches: match[], teamName: string) {
    const ReportedStr = this.analyzer.run(matches, teamName);
    this.output.print(ReportedStr);
  }
}

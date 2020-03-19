import { MatchReader } from './MatchReader';
import { AvgGoalAnalysis } from './Analyzers';
import { Summary } from './Summray';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const winsSummary = Summary.consoleReportForWins();
winsSummary.buildAndPrintReport(matchReader.matches, 'Man United');

const avgGoalsAnalysis = Summary.consoleReportForAvgGoals();
avgGoalsAnalysis.buildAndPrintReport(matchReader.matches, 'Man United');

const avgGoalsAnalysisHtml = Summary.htmlReportForAvgGoals();
avgGoalsAnalysisHtml.buildAndPrintReport(matchReader.matches, 'Man United');

const winsSummaryHtml = Summary.htmlReportForWins();
winsSummaryHtml.buildAndPrintReport(matchReader.matches, 'Man United');

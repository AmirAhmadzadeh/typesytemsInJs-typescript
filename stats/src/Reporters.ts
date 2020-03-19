import { OutputTarget } from './Summray';
import fs from 'fs';
export class HtmlReport implements OutputTarget {
  constructor() {}

  print(report: string): void {
    const html = `<html>
      <head>
          <style> 
            body , *{ 
              padding:0 ; 
              margin : 0 ; 
              font-size : 15px ;
              box-sizing : 'border-box' ;  
            }
          </style> 
      </head> 
      <body> 
          <h1> This is the Report  <h1>

          <div class='report'> 
             ${report} 
          </div>
      </body> 
    </html>`;
    fs.writeFileSync('report.html', html);
  }
}

export class ConsoleReport implements OutputTarget {
  constructor() {}

  print(report: string): void {
    console.log(report);
  }
}

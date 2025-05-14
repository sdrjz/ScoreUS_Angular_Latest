import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExportToExcelService {
  constructor() {}

  getFileName(name?: string) {
    let timeSpan = new Date().toISOString();
    let sheetName = name || 'ExportResult';
    let fileName = `${sheetName}-${timeSpan}`;
    return {
      sheetName,
      fileName,
    };
  }

  exportTableToExcel(tableId: string, name?: string) {
    let { sheetName, fileName } = this.getFileName(name);
    let targetTableElm = document.getElementById(tableId);
    let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
      sheet: sheetName,
    });
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
//  arr is heading
//   headings 
  exportArrayToExcel(
    arr: any[],
    heading: string[],
    name?: string,
    header?: string,
    columns? :any[]
  ) {

    let { sheetName, fileName } = this.getFileName(name);
    var wb = XLSX.utils.book_new();

    

    var ws = wb.Sheets['sheet1'];
    let sheetData: any[] = [];
    sheetData.push(heading);
    
    
    
    if (arr.length > 0) {
    //   var headers = Object.keys(arr[0]);
    //   var data: any[] = [];
    //   var index = 1;
    //   sheetData.push(heading);

      arr.forEach((item: any) => {
       let  data = [];
        columns.forEach((key: any) => {
            
            if(name =='NCR detail' && key.def == 'NCR'){
                data.push('Yes')
            }else
            data.push(item[key.def]);
        });
        sheetData.push(data);
      });
    }

    ws = XLSX.utils.aoa_to_sheet(sheetData);

    // var cell = ws[XLSX.utils.encode_cell({r:0 , c:0})]
    // cell.s = { alignment: { wrapText: true, vertical: 'center', horizontal: 'right' } }
    // let merge: any[] = [];
    // merge.push({ s: { c: 0, r: 0 }, e: { c: 9, r: 0 } });
    // merge.push({ s: { c: 0, r: 1 }, e: { c: 9, r: 1 } });
    // merge.push({ s: { c: 0, r: 2 }, e: { c: 9, r: 2 } });
    // const merge = [
    //   {s:{c:2,r:0},e:{c:5,r:0}},
    //   {s:{c:2,r:1},e:{c:5,r:1}}
    //   ,{s:{c:2,r:2},e:{c:5,r:2}}

    // ]
    // ws['!merges'] = merge;

    // ws = XLSX.utils.json_to_sheet(arr);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  exportObjectiveToExcel(
    arr: any[],
    heading: string[],
    name?: string,
    header?: string
  ) {
    let { sheetName, fileName } = this.getFileName(name);

    var wb = XLSX.utils.book_new();

    var ws = wb.Sheets['sheet1'];
    let sheetData: any[] = [];
    sheetData.push(['INDUS UNIVERSITY OF HEALTH AND SCIENCE']);
    sheetData.push(['EXAMINATION DEPARTMENT']);
    sheetData.push([header]);
    sheetData.push([]);
    if (arr.length > 0) {
      var headers = Object.keys(arr[0]);

      var data: any[] = [];

      var index = 1;

      sheetData.push(heading);
      sheetData.push([]);
      let j = 1;
      for (let i = 0; i < arr.length; i++) {
        
        sheetData.push([
          j,
          arr[i].program,
          arr[i].subject,
          arr[i].topic,
          arr[i].total,
          arr[i].used,
          arr[i].unused,
        ]);
        for (let k = 0; k < arr[i].learningObjective.length; k++) {
          sheetData.push([
            '',
            '',
            '',
            arr[i].learningObjective[k].objective,
            arr[i].learningObjective[k].total,
            arr[i].learningObjective[k].used,
            arr[i].learningObjective[k].unused,
          ]);
        }
      }
      // arr.forEach((item:any)=>{
      //   data = []
      //   headers.forEach((key: any)=>{
      //     item[key] = key == "ID" || key =="id" ? index : item[key];
      //     item[key] = key == "status"? (item[key] == true || item[key] == 1? "Active": "Deactive"):item[key]
      //     data.push(item[key]);
      //   })
      //   index++;
      //   sheetData.push(data)
      // })
    }

    ws = XLSX.utils.aoa_to_sheet(sheetData);

    // var cell = ws[XLSX.utils.encode_cell({r:0 , c:0})]
    // cell.s = { alignment: { wrapText: true, vertical: 'center', horizontal: 'right' } }
    let merge: any[] = [];
    merge.push({ s: { c: 0, r: 0 }, e: { c: 9, r: 0 } });
    merge.push({ s: { c: 0, r: 1 }, e: { c: 9, r: 1 } });
    merge.push({ s: { c: 0, r: 2 }, e: { c: 9, r: 2 } });
    // const merge = [
    //   {s:{c:2,r:0},e:{c:5,r:0}},
    //   {s:{c:2,r:1},e:{c:5,r:1}}
    //   ,{s:{c:2,r:2},e:{c:5,r:2}}

    // ]
    ws['!merges'] = merge;

    // ws = XLSX.utils.json_to_sheet(arr);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }


  exportExamAnalyticToExcel(
    arr: any,
    examArray: any,
    name?: string,
  ) {
    let { sheetName, fileName } = this.getFileName(name);

    var wb = XLSX.utils.book_new();

    var ws = wb.Sheets['sheet1'];
    let sheetData: any[] = [];
    sheetData.push(['Analytics Report - ' + examArray.name]);
    sheetData.push(["College","Program","Year","Semester","Subject","Exam Name","ExamId"]);
    sheetData.push([examArray.tosData.college.name,examArray.tosData.program.name,examArray.tosData.year.sessionName,examArray.tosData.semester.name,examArray.tosData.subject.name,examArray.name,examArray.id])
    sheetData.push([])
    sheetData.push(["No. if Items","No. of Examinees","Mean Raw Score","Variance","Standard Deviation","Minimum","Maximum","Median","Standard Error of Measurement","Reliablity"])
    sheetData.push([arr.totalQuestions,arr.totalStudents,arr.mean,arr.variance,arr.standardDeviation,arr.minimum,arr.maximum,arr.median,arr.standardErrorOfMeasurement,arr.reliability])    
    
    sheetData.push([])
    

    var questionHeader = [];
    for(let i=0; i<arr.questions.length; i++){
      questionHeader.push("Q"+(i+1))
    }
    sheetData.push(["Difficulty Index"])
    sheetData.push(questionHeader);

    sheetData.push(arr.questions.map((item: any)=> Number(item.difficultyIndex).toFixed(2)))
    sheetData.push([])
    sheetData.push(["Discrimination Index"])
    sheetData.push(questionHeader);

    sheetData.push(arr.questions.map((item: any)=> Number(item.discriminationIndex).toFixed(2)))
    sheetData.push([])
    sheetData.push(["Distractor Analysis"])
    sheetData.push(questionHeader);
    sheetData.push(arr.questions.map((item: any)=> item.distratorAnalysis?.split(',')[0]))
    sheetData.push(arr.questions.map((item: any)=> item.distratorAnalysis?.split(',')[1]))
    sheetData.push(arr.questions.map((item: any)=> item.distratorAnalysis?.split(',')[2]))
    sheetData.push(arr.questions.map((item: any)=> item.distratorAnalysis?.split(',')[3]))
    ws = XLSX.utils.aoa_to_sheet(sheetData);

    // var cell = ws[XLSX.utils.encode_cell({r:0 , c:0})]
    // cell.s = { alignment: { wrapText: true, vertical: 'center', horizontal: 'right' } }
    let merge: any[] = [];
    merge.push({ s: { c: 0, r: 0 }, e: { c: 500, r: 0 } });

    merge.push({ s: { c: 0, r: 7 }, e: { c: 500, r: 7 } });
    merge.push({ s: { c: 0, r:11 }, e: { c: 500, r: 11 } });
    merge.push({ s: { c: 0, r:15 }, e: { c: 500, r: 15 } });
    // const merge = [
    //   {s:{c:2,r:0},e:{c:5,r:0}},
    //   {s:{c:2,r:1},e:{c:5,r:1}}
    //   ,{s:{c:2,r:2},e:{c:5,r:2}}

    // ]
    ws['!merges'] = merge;

    // ws = XLSX.utils.json_to_sheet(arr);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

 
}

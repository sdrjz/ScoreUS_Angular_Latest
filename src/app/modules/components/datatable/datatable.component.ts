import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input() heading: string = 'datatable'
  @Input() public columns: any[] = []
  @Input() api: string;
  tableData: any[]
  constructor(private _apiService: GeneralApiService,
    private translateService:TranslateService,
    private cdr :ChangeDetectorRef) {
  }

  ngOnInit(): void {
    
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    this.getData()

  }

  
  getData() {

    this._apiService.get(this.api).subscribe((res: any) => {
      this.tableData = res;
    })
  }


}

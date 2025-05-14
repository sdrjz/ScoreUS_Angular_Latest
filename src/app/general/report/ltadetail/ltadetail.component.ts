import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { graphService } from 'src/app/services/appService/graphservice';

@Component({
  selector: 'app-ltadetail',
  templateUrl: './ltadetail.component.html',
  styleUrls: ['./ltadetail.component.css']
})
export class LtadetailComponent implements OnInit {
  public listLTA:any[]
  constructor(private _graphService:graphService,
    private crd:ChangeDetectorRef) { }

  ngOnInit(): void {
    // this._graphService.ltaDetail.subscribe((res:any)=>
    // {
    //   this.listLTA = res
    // })
  }

}

import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-totalscore',
  templateUrl: './totalscore.component.html',
  styleUrls: ['./totalscore.component.css']
})
export class TotalscoreComponent implements OnInit, OnChanges {
  @Input() data: any
  @Input() totalscorename: string;
  @Input() previousStatus: any
  @Input() dateDiff: any
  @Input() name: any
  sentance: any
  @Input() superAdminCounts
public totalScoreChange: number = 0;
  constructor(private cdr: ChangeDetectorRef,
    private translateService: TranslateService,
    private _apiService: GeneralApiService) { }

ngOnChanges(changes: SimpleChanges): void {
  if (this.dateDiff !== null && this.dateDiff !== undefined) {
    const dateDiff = +this.dateDiff;
    this.sentance = " than last " + Math.round(dateDiff) + " days period";
  }

  if (changes['numberScore'] && this.numberScore) {
    const current = this.numberScore?.currentStatus?.[0]?.totalScore;
    const previous = this.numberScore?.previousStatus?.[0]?.totalScore;

    if (current != null && previous != null) {
      if (previous === 0) {
        this.totalScoreChange = 100;
      } else {
        this.totalScoreChange = +(((current - previous) / previous) * 100).toFixed(2);
      }
    } else {
      this.totalScoreChange = 0;
    }

    this.cdr.detectChanges();
  }
}




  @Input() subtitle: string;

  @Input() numberScore: any;



  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res: any) => {
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

  getPercentageValue(propertyName: any) {

    if (!this.superAdminCounts) return 0
    if (this.superAdminCounts[0][propertyName] == 0) return 0;
    let val = this.superAdminCounts[0][propertyName]
    let value = (this.superAdminCounts[0][propertyName] - this.superAdminCounts[1][propertyName]) / this.superAdminCounts[0][propertyName];
    return Math.round(value)
  }


getImage() {
  if (this.totalScoreChange < 0)
    return '../../../assets/images/arrow-narrow-up.png';
  else if (this.totalScoreChange === 0)
    return '../../../assets/images/yellow2.png';
  else
    return '../../../assets/images/ic-arrow-narrow-up.svg';
}

getTextColor() {
  if (this.totalScoreChange < 0)
    return 'color:red !important;';
  else if (this.totalScoreChange === 0)
    return 'color:#FFCF64 !important;';
  else
    return 'color:#00D9A6 !important;';
}

  }


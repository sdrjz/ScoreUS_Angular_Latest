import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UiService } from './services/appService/ui.service';
import { GeneralApiService } from './services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,AfterViewInit,OnDestroy {
  //title = 'title';
  //Loader variable default true before page load
  loader = true;
  mySubscription: any;
  
  constructor(private renderer: Renderer2,  private router: Router,
    private activatedRoute: ActivatedRoute,private _uiService:UiService,private _apiService:GeneralApiService,
    private translateService:TranslateService,private cdr : ChangeDetectorRef) {}
  title = 'ScoreUS';
  headerTitle = 'Loading';
    
  //graphtitle1 = 'Total Open PO Value';

  ngOnInit(): void {
    

    //Loader variable set false after page load
      this._apiService.isCompareLoader$.subscribe((res:any)=>{this.loader = res})
      this._apiService.isLanguageSelector$.subscribe((res:any)=>{
        this.translateService.use(res)
        this.cdr.detectChanges()
      })
      this.cdr.detectChanges()
  }
  

  ngAfterViewInit() {
    this._uiService.loading$.subscribe((state) => {
      if (!state) {
        let loader = this.renderer.selectRootElement('#loader', true);
        this.renderer.setStyle(loader, 'display', 'none');
      } else {
        let loader = this.renderer.selectRootElement('#loader', true);
        this.renderer.setStyle(loader, 'display', 'block');
      }
    });
  }

  ngOnDestroy(){
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }


}



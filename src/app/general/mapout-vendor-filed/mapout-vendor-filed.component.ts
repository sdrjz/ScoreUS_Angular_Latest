import { ENTER, COMMA } from '@angular/cdk/keycodes';

import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips'; // Can remove if not used elsewhere
import { TranslateService } from '@ngx-translate/core';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';
import { dateValidator } from 'src/app/validation/date-validator';
import { DropdownService } from '../../services/appService/dropdown.service';
import { DropDownDTO } from '../../modal/dropdown-dto';

@Component({
  selector: 'app-mapout-vendor-filed',
  templateUrl: './mapout-vendor-filed.component.html',
  styleUrls: ['./mapout-vendor-filed.component.css']
})
export class MapoutVendorFiledComponent implements OnInit {
  countries: DropDownDTO[] = [];
  countryControl = new FormControl();
  @Output() vendorMapOutEmitter = new EventEmitter<any>();
  listMapOutVendor: any[]
  numberArray: number[]
  tips = tips
  selectedPlants: any = ''
  selectedCommodity: any = ''
  selectedCountry: any = ''
  selectedCity: any = ''
  public currentDate = new Date()
  listsDropDown: any = {
    plantDropDown: [],
    VendorDropDown: [],
    CommodityDropDown: [],
    CountryDropDown: [],
    CityDropDown: [],
    colourDropDown: []
  }
  // CHANGE: Remove 'selected' array; use a single selectedVendor instead
  selectedVendor: any = ''; // For single selection
  plant = [''];
  @Input() loader = false
  separatorKeysCodes: number[] = [ENTER, COMMA]; // Can remove if not used
  currentUser: any
  public startDate: any
  public endDate: any
  public plantInput: any
  public listPlant: any[]
  public listCountry: any[]
  public listCity: any[]
  public listCommodity: any[] = []
  public listVendor: any[]
  public form: FormGroup
  public commodityInput: string = ""
  public countryInput: string = ""
  public cityInput: string = ""
  public vendorInput: string = ""
  public listColour: any[] = [];
  public colourInput: string = '';
  public selectedColour: any = '';
  @ViewChild('fruitInput') fruitInput: ElementRef; // Can rename or remove if not needed

  constructor(private _apiService: GeneralApiService,
    private _notificationService: NotificationService,

    private translateService: TranslateService,
    private dropdownSvc: DropdownService,
    private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    // language & loader subscriptions
    this._apiService.isLanguageSelector$.subscribe((res: any) => {
      this.translateService.use(res);
      this.cdr.detectChanges();
    });
    this._apiService.isCompareLoader$.subscribe((res: any) => this.loader = res);

    // get user
    const user = localStorage.getItem('userData');
    if (user) this.currentUser = JSON.parse(user);

    // build form
    this.form = new FormGroup({
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      plantCode: new FormControl('ALL', Validators.required),
      commodity: new FormControl('ALL'),
      vendorCode: new FormControl('ALL'),
      allVendorCode: new FormControl('ALL'),
      countryCode: new FormControl(null, Validators.required),
     cityCode: new FormControl(null, Validators.required),
      colour: new FormControl('ALL'),
      tenantId: new FormControl(this.currentUser.tenantID)
    }, { validators: dateValidator });

    // kick off the loader
    this._apiService.isCompareLoader$.next(true);

    // fetch your “last posting date” and seed the start/end controls
    this._apiService
      .get(`${api.GetVendorScoreCard}/${this.currentUser.tenantID}`)
      .subscribe(
        (res: any) => {
          if (res.data?.endDate) {
            this.endDate = new Date(res.data.endDate);
            this.startDate = new Date(this.endDate);
            this.startDate.setDate(this.endDate.getDate() - 179);

            this.form.controls['startDate'].setValue(this.startDate);
            this.form.controls['endDate'].setValue(this.endDate);

            // ==== NEW: load country dropdown ====
            this.loadCountries();
            this.loadCities();
            // ====================================

            // your existing dropdown loaders
            this.loadDefaultDropdowns();

            // re‑load countries whenever any filter changes
            this.form.controls['startDate'].valueChanges.subscribe(() => this.loadCountries());
            this.form.controls['endDate'].valueChanges.subscribe(() => this.loadCountries());
            this.form.controls['plantCode'].valueChanges.subscribe(() => this.loadCountries());
            this.form.controls['vendorCode'].valueChanges.subscribe(() => this.loadCountries());
            this.form.controls['commodity'].valueChanges.subscribe(() => this.loadCountries());
            this.form.controls['countryCode'].valueChanges.subscribe(() => this.loadCities());  // ← new
          } else {
            this._notificationService.push(
              'No valid posting date returned from PO History.',
              2
            );
          }
          this._apiService.isCompareLoader$.next(false);
        },
        () => {
          this._notificationService.push(
            'Failed to retrieve posting date.',
            2
          );
          this._apiService.isCompareLoader$.next(false);
        }
      );

    this.listColour = [
      { id: 'ALL', name: 'ALL' },
      { id: 'GREEN', name: 'GREEN' },
      { id: 'YELLOW', name: 'YELLOW' },
      { id: 'RED', name: 'RED' }
    ];
    this.listsDropDown.colourDropDown = JSON.parse(JSON.stringify(this.listColour));
    this.selectedColour = this.onDropDownSelectionSetData(this.listColour, 'ALL');
    this.form.controls['colour'].setValue(this.selectedColour);
    this.colourInput = 'ALL';
  }

  /**
   * Calls the new /MapOutCountry endpoint and updates `this.countries`.
   */
  private loadCountries(): void {
    // build the query string exactly how GeneralApiService expects it
    let path = `${api.getMapOutCountries}`
      + `?TenantId=${this.currentUser.tenantID}`
      + `&StartDate=${this.formatDate(this.form.controls['startDate'].value)}`
      + `&EndDate=${this.formatDate(this.form.controls['endDate'].value)}`
      + `&PlantCode=${this.form.controls['plantCode'].value}`;

    const vendor = this.form.controls['vendorCode'].value;
    if (vendor && vendor !== 'ALL') {
      path += `&VendorCode=${vendor}`;
    }
    const commodity = this.form.controls['commodity'].value;
    if (commodity && commodity !== 'ALL') {
      path += `&Commodity=${commodity}`;
    }

    this._apiService.get(path)
      .subscribe(
        (res: any) => {
          const data: DropDownDTO[] = res.data || [];
          // 1. build an “ALL” option
          const allOpt: DropDownDTO = { id: 'ALL', name: 'ALL' };
          // 2. prefix it to the list
          this.countries = [allOpt, ...data];
          this.listCountry = this.countries;
          this.listsDropDown.CountryDropDown = this.countries;
          // 3. if nothing selected yet, default to ALL
          if (!this.form.controls['countryCode'].value) {
            this.form.controls['countryCode'].setValue('ALL');
            this.countryInput = 'ALL';
          }
        },
        () => {
          this._notificationService.push('Failed to load countries', 2);
        }
      );

  }
  /**
   * Loads cities filtered by map‑out criteria, including the selected country.
   */
private loadCities(): void {
    // build the same base path
    let path = `${api.getMapOutCountries.replace('Country', 'City')}`
      + `?TenantId=${this.currentUser.tenantID}`
      + `&StartDate=${this.formatDate(this.form.controls['startDate'].value)}`
      + `&EndDate=${this.formatDate(this.form.controls['endDate'].value)}`
      + `&PlantCode=${this.form.controls['plantCode'].value}`
      + `&VendorCode=${this.form.controls['vendorCode'].value}`
      + `&Commodity=${this.form.controls['commodity'].value}`
      + `&Country=${this.form.controls['countryCode'].value}`;

    this._apiService.get(path)
      .subscribe(
        (res: any) => {
          const data: DropDownDTO[] = res.data || [];
          const allOpt: DropDownDTO = { id: 'ALL', name: 'ALL' };
          this.listCity = [allOpt, ...data];
          this.listsDropDown.CityDropDown = this.listCity;
          if (!this.form.controls['cityCode'].value) {
            this.form.controls['cityCode'].setValue('ALL');
            this.cityInput = 'ALL';
          }
        },
        () => {
          this._notificationService.push('Failed to load cities', 2);
        }
      );

  }


  /**
   * Formats a Date object as 'YYYY-MM-DD' for the API.
   */
  private formatDate(d: Date): string {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  loadCountryCity() {
    this._apiService.get(api.getCountries + "/" + this.currentUser.tenantID).subscribe((res: any) => {
      const countries = [{ id: 'ALL', name: 'ALL' }, ...res.data];
      this.listCountry = res.data;
      this.listsDropDown.CountryDropDown = JSON.parse(JSON.stringify(res.data));
      this.countryInput = this.listCountry.find((c: any) => c.id === 'ALL')?.name || 'ALL';

      this._apiService.get(api.getCity + "/" + this.currentUser.tenantID).subscribe((inres: any) => {
        const cities = [{ id: 'ALL', name: 'ALL' }, ...inres.data];
        this.listCity = inres.data;
        this.listsDropDown.CityDropDown = JSON.parse(JSON.stringify(inres.data));
        this.cityInput = this.listCity.find((c: any) => c.id === 'ALL')?.name || 'ALL';
      });
    });
  }

  loadDefaultDropdowns() {
    this._apiService.isCompareLoader$.next(true);

    this._apiService.post(api.getPlantDropDown, {
      startDate: this.startDate,
      endDate: this.endDate,
      tenantId: this.currentUser.tenantID
    }).subscribe((res: any) => {
      this.listPlant = res.data;
      this.listsDropDown.plantDropDown = res.data;
      this.selectedPlants = this.onDropDownSelectionSetData(this.listPlant, "ALL");
      this.form.controls['plantCode'].setValue(this.selectedPlants);
      this.plantInput = this.listPlant.find((p: any) => p.id === 'ALL')?.name || 'ALL';

      this._apiService.post(api.getCommodityDropDown, {
        startDate: this.startDate,
        endDate: this.endDate,
        tenantId: this.currentUser.tenantID,
        plantCode: this.selectedPlants
      }).subscribe((res: any) => {
        this.listCommodity = res.data;
        this.listsDropDown.commodityDropDown = res.data;
        this.selectedCommodity = this.onDropDownSelectionSetData(this.listCommodity, "ALL");
        this.form.controls['commodity'].setValue(this.selectedCommodity);
        this.commodityInput = this.listCommodity.find((c: any) => c.id === 'ALL')?.name || 'ALL';

        this._apiService.post(api.getVendorDropDown, {
          startDate: this.startDate,
          endDate: this.endDate,
          tenantId: this.currentUser.tenantID,
          plantCode: this.selectedPlants,
          commodity: this.selectedCommodity
        }).subscribe((res: any) => {
          this.listVendor = res.data;
          this.listsDropDown.vendorDropDown = res.data;
          // CHANGE: Set single vendor to 'ALL' initially
          this.selectedVendor = this.onDropDownSelectionSetData(this.listVendor, "ALL");
          this.form.controls['vendorCode'].setValue(this.selectedVendor);
          this.vendorInput = this.listVendor.find((v: any) => v.id === 'ALL')?.name || 'ALL';
          this._apiService.isCompareLoader$.next(false);
        }, () => this._apiService.isCompareLoader$.next(false));

      }, () => this._apiService.isCompareLoader$.next(false));

    }, () => this._apiService.isCompareLoader$.next(false));
  }



  ngOnChanges(changes: SimpleChanges) {


  }


  public findInvalidControls() {
    const invalid = [];
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }


  onExecuteClick() {
    // CHANGE: Use single vendorCode directly instead of building CSV
    const data = this.form.controls['vendorCode'].value || 'ALL';

    // 2) Ensure countryCode & cityCode aren’t empty
    const country = this.form.controls['countryCode'].value || 'ALL';
    const city = this.form.controls['cityCode'].value || 'ALL';

    // 3) Quick form validity check for the required fields
    if (
      !this.form.controls['startDate'].value ||
      !this.form.controls['endDate'].value ||
      !this.form.controls['plantCode'].value ||
      !data ||
      !country ||
      !city
    ) {
      this._notificationService.push('fill all data first', 1);
      return;
    }

    // 4) Build the payload, overriding dates, country/city case, colour, vendorCode
    const payload = {
      tenantId: this.currentUser.tenantID,
      startDate: this._apiService.setFormControlDate(this.form, 'startDate'),
      endDate: this._apiService.setFormControlDate(this.form, 'endDate'),
      plantCode: this.form.controls['plantCode'].value,
      commodity: this.form.controls['commodity'].value,
      vendorCode: this.form.value.vendorCode, // CHANGE: Single value instead of CSV
       allVendorCode: this.form.value.vendorCode,
      countryCode: this.form.value.countryCode,
      cityCode: this.form.value.cityCode,
      colour: this.form.controls['colour'].value
    };
  // ← Insert your debug log here:
  console.log('MapOut payload:', payload);
    // 5) Fire the API
    this._apiService.isCompareLoader$.next(true);
    this._apiService.post(api.mapOutVendor, payload)
      .subscribe(
        (res: any) => {
          this._apiService.isCompareLoader$.next(false);
          this.listMapOutVendor = res.data;
          this.vendorMapOutEmitter.emit(this.listMapOutVendor);
        },
        () => {
          this._apiService.isCompareLoader$.next(false);
        }
      );
  }





  onPlantSelect(data: any) {
    this.form.controls["vendorCode"].setValue(null)
    this.form.controls["commodity"].setValue(null)
    this.selectedPlants = ''
    this.selectedPlants = this.onDropDownSelectionSetData(this.listsDropDown.plantDropDown, data.option.value);
    this.form.controls['plantCode'].setValue(this.selectedPlants)
    this.plantInput = data.option.value;
    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getCommodityDropDown,
      {
        startDate: this.form.controls["startDate"].value,
        endDate: this.form.controls["endDate"].value,
        tenantId: this.currentUser.tenantID,
        plantCode: this.selectedPlants,
      }).subscribe((res: any) => {
        this._apiService.isCompareLoader$.next(false)
        this.listCommodity = res.data
        this.listsDropDown.commodityDropDown = res.data
      }, (e: any) => {
        this._apiService.isCompareLoader$.next(false)
      })



  }


  onDropDownSelectionSetData(list: any[], value: any) {
    let output = ''
    if (value == "ALL") {
      for (var i = 0; i < list.length; i++) {
        if (list[i].id != "ALL")
          output = output + list[i].id

        if (i < list.length - 1) {
          if (list[i].id != "ALL")
            output = output + ',';
        }
      }
    } else {
      output = list.filter((i: any) => i.name == value)[0]?.id
    }
    return output
  }

  onCommoditySelection(data: any) {
    // CHANGE: Reset single vendor instead of array
    this.selectedVendor = '';
    this.selectedCommodity = this.onDropDownSelectionSetData(this.listsDropDown.commodityDropDown, data.option.value)
    this.form.controls['commodity'].setValue(this.selectedCommodity)
    this.commodityInput = data.option.value;

    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getVendorDropDown,
      {
        startDate: this.form.controls["startDate"].value,
        endDate: this.form.controls["endDate"].value,
        tenantId: this.currentUser.tenantID,
        plantCode: this.selectedPlants,
        commodity: this.selectedCommodity
      }).subscribe((res: any) => {
        this._apiService.isCompareLoader$.next(false)
        this.listsDropDown.vendorDropDown = res.data
        let selectedVendor = this.onDropDownSelectionSetData(this.listsDropDown.vendorDropDown, "ALL");
        this.form.controls["allVendorCode"].setValue(selectedVendor);

        this.listVendor = res.data
        // CHANGE: Set default single vendor
        this.selectedVendor = selectedVendor;
        this.form.controls['vendorCode'].setValue(this.selectedVendor);
        this.vendorInput = this.listVendor.find((v: any) => v.id === 'ALL')?.name || 'ALL';
      }, (e: any) => {
        this._apiService.isCompareLoader$.next(false)
      })
  }


  onCountrySelection(data: any) {

    this.selectedCountry = this.onDropDownSelectionSetData(this.listsDropDown.CountryDropDown, data.option.value);
    this.countryInput = data.option.value;

    this.form.controls['countryCode'].setValue(this.selectedCountry);
    // this.getCities('');
    this.loadCities();
  }

  getCities(data: any) {

    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getCity, {
      countriesId: this.numberArray,
      searchText: data
    }
    ).subscribe((res: any) => {
      this._apiService.isCompareLoader$.next(false)
      this.listsDropDown.CityDropDown = JSON.parse(JSON.stringify(res.data));
      this.listCity = res.data
    }, (e: any) => {
      this._apiService.isCompareLoader$.next(false)
    })
  }



  onCitySelection(data: any) {
    this.selectedCity = this.onDropDownSelectionSetData(this.listsDropDown.CityDropDown, data.option.value)
    this.cityInput = data.option.value;
    this.form.controls['cityCode'].setValue(this.selectedCity)


  }




  onCommodityInput(data: any) {
    if (this.commodityInput === '' || this.commodityInput === undefined) {
      this.listCommodity = this.listsDropDown?.commodityDropDown;
    } else {
      this.listCommodity = this.listsDropDown?.commodityDropDown.filter((i: any) => i.name.toLowerCase().includes(this.commodityInput.toLowerCase()));
    }
  }

  onCountryInput(data: any) {
    if (this.countryInput === '' || this.countryInput === undefined) {
      this.listCountry = this.listsDropDown?.CountryDropDown;
    } else {
      this.listCountry = this.listsDropDown?.CountryDropDown.filter((i: any) => i.name.toLowerCase().includes(this.countryInput.toLowerCase()));
    }
  }

  onCityInput(data: any) {
    if (this.cityInput === '' || this.cityInput === undefined) {
      this.listCity = this.listsDropDown?.CityDropDown;
    } else {
      this.listCity = this.listsDropDown?.CityDropDown.filter((i: any) => i.name.toLowerCase().includes(this.cityInput.toLowerCase()));
    }
  }





  // CHANGE: New method for single vendor selection (modeled after onCommoditySelection)
  onVendorSelection(data: any) {
    this.selectedVendor = this.onDropDownSelectionSetData(this.listsDropDown.vendorDropDown, data.option.value);
    this.form.controls['vendorCode'].setValue(this.selectedVendor);
    this.vendorInput = data.option.value;
  }

  onVendorInput(data: any) {
    if (this.vendorInput === '' || this.vendorInput === undefined) {
      this.listVendor = this.listsDropDown?.vendorDropDown;
    } else {
      this.listVendor = this.listsDropDown?.vendorDropDown.filter((i: any) => i.name.toLowerCase().includes(this.vendorInput.toLowerCase()));
    }
  }

  onPlantInput(data: any) {
    if (this.plantInput === '' || this.plantInput === undefined) {
      this.listPlant = this.listsDropDown?.plantDropDown;
    } else {
      this.listPlant = this.listsDropDown?.plantDropDown.filter((i: any) => i.name.toLowerCase().includes(this.plantInput.toLowerCase()));
    }
  }

  onColourSelection(data: any) {
    this.selectedColour = this.onDropDownSelectionSetData(this.listsDropDown.colourDropDown, data.option.value);
    this.form.controls['colour'].setValue(this.selectedColour);
    this.colourInput = data.option.value;
  }

  onColourInput(data: any) {
    if (this.colourInput === '' || this.colourInput === undefined) {
      this.listColour = this.listsDropDown?.colourDropDown;
    } else {
      this.listColour = this.listsDropDown?.colourDropDown.filter((i: any) => i.name.toLowerCase().includes(this.colourInput.toLowerCase()));
    }
  }

  
  // CHANGE: Remove onSelected, add, remove methods as they are for multi-selection chips

  onDateChange() {
    this.form.controls["plantCode"].setValue(null)
    this.form.controls["commodity"].setValue(null)
    this.form.controls["vendorCode"].setValue(null)
    this.selectedPlants = ''
    this.selectedCommodity = ''
    // CHANGE: Reset single vendor
    this.selectedVendor = ''
    this.plantInput = ''
    this.commodityInput = ''
    if (!this.form.controls['startDate'].value || !this.form.controls['endDate'].value)
      return

    if (this.form.controls['startDate'].value >= this.form.controls['endDate'].value)
      return
    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getPlantDropDown,
      {
        startDate: this.form.controls['startDate'].value,
        endDate: this.form.controls['endDate'].value,
        tenantId: this.currentUser.tenantID
      }
    ).subscribe((res: any) => {
      this._apiService.isCompareLoader$.next(false)
      this.listPlant = res.data
      this.listsDropDown.plantDropDown = res.data

      this.selectedPlants = ''


      this._notificationService.push(res.message, 1)

    }, (e: any) => {
      this._apiService.isCompareLoader$.next(false)

    })

  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DropDownDTO } from '../../modal/dropdown-dto';
import { environment } from '../../../environments/environment';
import { api } from '../../api.endpoints';

@Injectable({ providedIn: 'root' })
export class DropdownService {
  constructor(private http: HttpClient) {}

  /** Fetch countries filtered by Map‑Out criteria */
  getMapOutCountries(model: {
    tenantId: number;
    startDate: string;
    endDate: string;
    plantCode?: string;
    vendorCode?: string;
    commodity?: string;
  }): Observable<DropDownDTO[]> {
    let params = new HttpParams()
      .set('TenantId',  model.tenantId.toString())
      .set('StartDate', model.startDate)
      .set('EndDate',   model.endDate);

    if (model.plantCode)  params = params.set('PlantCode',  model.plantCode);
    if (model.vendorCode) params = params.set('VendorCode', model.vendorCode);
    if (model.commodity)  params = params.set('Commodity',  model.commodity);
 // 🐞 Debug logs:
  console.log('BASE URL:       ', environment.apiUrl);
  console.log('ENDPOINT PATH:  ', api.getMapOutCountries);
  console.log('FULL REQUEST TO:', `${environment.apiUrl}${api.getMapOutCountries}`, params.toString());

    return this.http.get<DropDownDTO[]>(
      `${environment.apiUrl}${api.getMapOutCountries}`,
      { params }
    );
  }
/** Fetch cities filtered by Map‑Out criteria (includes country) */
  getMapOutCities(model: {
    tenantId: number;
    startDate: string;
    endDate: string;
    plantCode?: string;
    vendorCode?: string;
    commodity?: string;
    country: string;
  }): Observable<DropDownDTO[]> {
    let params = new HttpParams()
      .set('TenantId', model.tenantId.toString())
      .set('StartDate',  model.startDate)
      .set('EndDate',    model.endDate)
      .set('PlantCode',  model.plantCode || '')
      .set('VendorCode', model.vendorCode || '')
      .set('Commodity',  model.commodity || '')
      .set('Country',    model.country);

    return this.http.get<DropDownDTO[]>(
      `${environment.apiUrl}${api.getMapOutCities}`,
      { params }
    );
  }
}

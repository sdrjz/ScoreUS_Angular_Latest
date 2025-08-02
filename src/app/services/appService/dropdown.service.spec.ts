import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { DropdownService } from './dropdown.service';
import { environment } from '../../../environments/environment';
import { api } from '../../api.endpoints';
import { DropDownDTO } from '../../modal/dropdown-dto';

describe('DropdownService', () => {
  let service: DropdownService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DropdownService]
    });
    service = TestBed.inject(DropdownService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getMapOutCountries', () => {
    it('should fetch countries with correct URL and params', () => {
      const dummyCountries: DropDownDTO[] = [
        { id: 'USA', name: 'United States' },
        { id: 'CAN', name: 'Canada' }
      ];
      const model = {
        tenantId: 3086,
        startDate: '2018-12-02',
        endDate: '2019-05-30',
        plantCode: '1001,1002',
        vendorCode: 'ALL',
        commodity: 'ALL'
      };

      service.getMapOutCountries(model).subscribe(countries => {
        expect(countries).toEqual(dummyCountries);
      });

      const req = httpMock.expectOne(request =>
        request.method === 'GET' &&
        request.url === `${environment.apiUrl}${api.getMapOutCountries}` &&
        request.params.get('TenantId') === model.tenantId.toString() &&
        request.params.get('StartDate') === model.startDate &&
        request.params.get('EndDate') === model.endDate &&
        request.params.get('PlantCode') === model.plantCode &&
        request.params.get('VendorCode') === model.vendorCode &&
        request.params.get('Commodity') === model.commodity
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyCountries);
    });
  });

  describe('#getMapOutCities', () => {
    it('should fetch cities with correct URL and params', () => {
      const dummyCities: DropDownDTO[] = [
        { id: 'NYC', name: 'New York' },
        { id: 'LAX', name: 'Los Angeles' }
      ];
      const model = {
        tenantId: 3086,
        startDate: '2018-12-02',
        endDate: '2019-05-30',
        plantCode: '1001,1002',
        vendorCode: 'ALL',
        commodity: 'ALL',
        country: 'USA'
      };

      service.getMapOutCities(model).subscribe(cities => {
        expect(cities).toEqual(dummyCities);
      });

      const req = httpMock.expectOne(request =>
        request.method === 'GET' &&
        request.url === `${environment.apiUrl}${api.getMapOutCities}` &&
        request.params.get('TenantId') === model.tenantId.toString() &&
        request.params.get('StartDate') === model.startDate &&
        request.params.get('EndDate') === model.endDate &&
        request.params.get('PlantCode') === model.plantCode &&
        request.params.get('VendorCode') === model.vendorCode &&
        request.params.get('Commodity') === model.commodity &&
        request.params.get('Country') === model.country
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyCities);
    });
  });
});

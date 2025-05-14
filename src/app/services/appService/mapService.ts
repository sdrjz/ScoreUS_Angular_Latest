import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  // private apiKey = 'AIzaSyCgyjekghCRnWwtq4V6UAq1DG3yC7b7ot4'; // bushel pro Replace with your API key
  private apiKey = 'AIzaSyCz-3-TbXL7ur_dY9TSp0hVzDPbH4P6i5s'; // Score us key

  constructor(private http: HttpClient) {}

  getCoordinates(address: string): Observable<any> {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}
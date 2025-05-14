import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  // Importing reactive forms modules
import { GeocodingService } from 'src/app/services/appService/mapService';

@Component({
  selector: 'app-mapout-vendor-map',
  templateUrl: './mapout-vendor-map.component.html',
  styleUrls: ['./mapout-vendor-map.component.css']
})
export class MapoutVendorMapComponent implements OnInit, OnChanges, AfterViewInit {
  mapCenter: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };
  locationViseVendors: any[] = [];
  customLocation: string;
  customUserName: string;
  loggedInUser: any;
  mapOptions: google.maps.MapOptions = { zoom: 15 };
  map: google.maps.Map | undefined;

  // FormGroup declaration
  vendorForm: FormGroup;

  @Input() listRankedVendor!: any[];

  constructor(private googleMapService: GeocodingService, private cdr: ChangeDetectorRef, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the FormGroup inside ngOnInit
    this.vendorForm = this.fb.group({
      vendorName: ['', Validators.required],  // Vendor Name field
      address: ['', Validators.required]       // Address field
    });
  }

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listRankedVendor']) {
      this.fetchVendorsCoordinates();
    }
  }

  // Initialize the map
  initializeMap(): void {
    const mapElement = document.getElementById("map") as HTMLElement;
    this.map = new google.maps.Map(mapElement, this.mapOptions);
    this.map.setCenter(this.mapCenter);
  }

  // Fetch coordinates of vendors and display them on the map
  fetchVendorsCoordinates(): void {
    this.locationViseVendors = [];
    if (!this.listRankedVendor || this.listRankedVendor.length < 1) return;

    // Fetch vendor locations
    const vendorRequests = this.listRankedVendor.map((vendor: any) => {
      const addresses = vendor.addresses || [vendor.address || vendor.city];  // Multiple possible addresses
      return Promise.all(addresses.map((address: string) => {
        return this.googleMapService.getCoordinates(address).toPromise().then((res: any) => {
          if (res.results && res.results.length > 0 && res.results[0].geometry) {
            const location = res.results[0].geometry.location;
            this.locationViseVendors.push({
              label: vendor.vendorName,
              title: res.results[0].formatted_address,
              location: location,
              address: res.results[0].formatted_address
            });
            this.addVendorMarker(location, vendor.vendorName, res.results[0].formatted_address);
          } else {
            console.error('No location found for vendor:', vendor.vendorName);
          }
        }).catch((error) => {
          console.error('Error fetching coordinates for vendor:', vendor.vendorName, error);
        });
      }));
    });

    Promise.all(vendorRequests).then(() => {
      // Once all vendors are fetched, then fetch custom location
      this.getCustomLocationCoordinates();
    });
  }

  // Get coordinates of custom location (user's location)
  getCustomLocationCoordinates(): void {
    const user = localStorage.getItem('userData');
    if (user) this.loggedInUser = JSON.parse(user);

    this.customLocation = this.loggedInUser.address;
    this.customUserName = `${this.loggedInUser.firstName} ${this.loggedInUser.lastName}`;

    this.googleMapService.getCoordinates(this.customLocation).subscribe((res: any) => {
      if (res.results && res.results.length > 0 && res.results[0].geometry) {
        const location = res.results[0].geometry.location;
        this.updateMap(location);
      } else {
        console.error("Could not find the specified location.");
      }
    });
  }

  // Update the map by extending bounds to include all locations
  updateMap(centerLocation: google.maps.LatLngLiteral): void {
    if (this.map) {
      const bounds = new google.maps.LatLngBounds();
      
      // Extend bounds for all vendor locations
      this.locationViseVendors.forEach(vendor => {
        bounds.extend(vendor.location);
      });
      
      // Also extend bounds for the custom location
      bounds.extend(centerLocation);

      // Fit map to all locations
      this.map.fitBounds(bounds);
      this.addCustomLocationMarker(centerLocation);
    }
  }

  // Add a marker for the vendor location on the map
  addVendorMarker(location: google.maps.LatLngLiteral, title: any, address: string): void {
    if (this.map) {
      new google.maps.Marker({
        position: location,
        title: address,
        map: this.map,
        label: {
          text: `${title}`,
          color: "red",
          fontSize: "18px",
          fontWeight: "bold",
        },
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
      });
    }
  }

  // Add a marker for the custom user location on the map
  addCustomLocationMarker(location: google.maps.LatLngLiteral): void {
    if (this.map) {
      new google.maps.Marker({
        position: location,
        title: this.customLocation,
        map: this.map,
        label: {
          text: this.customUserName,
          color: "blue",
          fontSize: "18px",
          fontWeight: "bold",
        },
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
      });
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.vendorForm.valid) {
      const vendorName = this.vendorForm.value.vendorName;
      const address = this.vendorForm.value.address;

      // Fetch coordinates for the entered vendor address
      this.googleMapService.getCoordinates(address).subscribe((res: any) => {
        if (res.results && res.results.length > 0 && res.results[0].geometry) {
          const location = res.results[0].geometry.location;

          // Add the vendor marker on the map
          this.addVendorMarker(location, vendorName, res.results[0].formatted_address);

          // Update the map bounds
          this.updateMap(location);
        } else {
          console.error('Could not find location for the vendor.');
        }
      });
    }
  }
}

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

    const cleanReadableStyle: google.maps.MapTypeStyle[] = [
    {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.medical",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "poi.school",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ visibility: "on" }]
    },
    {
      featureType: "road.local",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [{ visibility: "off" }]
    }
  ];

    this.map = new google.maps.Map(mapElement, {
      center: this.mapCenter,
      zoom: 15,
      styles: cleanReadableStyle  // ✅ apply simplified style here
    });
  }


  // Fetch coordinates of vendors and display them on the map
  fetchVendorsCoordinates(): void {
    // ✅ Clear map and reinitialize
    document.getElementById("map")!.innerHTML = "";
    this.initializeMap();
    this.locationViseVendors = [];

    // ❌ If no vendors, just show user
    if (!this.listRankedVendor || this.listRankedVendor.length === 0) {
      this.getCustomLocationCoordinates();  // Still show user
      return;
    }

    const vendorRequests = this.listRankedVendor.map((vendor: any) => {
      const address = `${vendor.address}, ${vendor.city}, ${vendor.country}, ${vendor.zipcode}`;
      return this.googleMapService.getCoordinates(address).toPromise().then((res: any) => {
        if (res.results?.length > 0) {
          const location = res.results[0].geometry.location;

          this.locationViseVendors.push({ vendorName: vendor.vendorName, location });

          let color = 'white';
          const vendorColor = (vendor.color || '').toUpperCase();
          if (vendorColor === 'RED') color = 'red';
          else if (vendorColor === 'YELLOW') color = 'yellow';
          else if (vendorColor === 'GREEN') color = 'green';

          this.addVendorMarker(
    location,
    vendor.vendorName,
    color,
    address);
        }
      });
    });

    Promise.all(vendorRequests).then(() => {
      this.getCustomLocationCoordinates(); // always add user after vendors
    });
  }





  // Get coordinates of custom location (user's location)
  getCustomLocationCoordinates(): void {
    const user = localStorage.getItem('userData');
    if (user) this.loggedInUser = JSON.parse(user);

    this.customLocation = `${this.loggedInUser.address}, ${this.loggedInUser.city}, ${this.loggedInUser.country}, ${this.loggedInUser.zipcode}`;

    this.customUserName = `${this.loggedInUser.firstName} ${this.loggedInUser.lastName}`;

  this.googleMapService.getCoordinates(this.customLocation).subscribe((res: any) => {
    if (res.results?.length > 0) {
      const location = res.results[0].geometry.location;
      this.updateMap(location); // ✅ Now safe — vendors are loaded first
    }
  });

  }

  // Update the map by extending bounds to include all locations
  updateMap(userLocation: google.maps.LatLngLiteral): void {
    if (!this.map) return;

    const bounds = new google.maps.LatLngBounds();

    // ✅ Vendor markers included first
    this.locationViseVendors.forEach(vendor => {
      bounds.extend(vendor.location);
    });

    // ✅ User marker added AND extended into bounds
    this.addCustomLocationMarker(userLocation);
    bounds.extend(userLocation);

    this.map.fitBounds(bounds);

    // Prevent zooming in too closely (max zoom level 12 for a slightly zoomed-out view)
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      if (this.map!.getZoom()! > 12) {
        this.map!.setZoom(12);
      }
    });
  }



  // Add a marker for the vendor location on the map
  addVendorMarker(
    location: google.maps.LatLngLiteral,
    vendorName: string,
    color: string,
    address: string
  ): void {
    if (this.map) {
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: address,
        icon: {
          url: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
        },
      });

      // Create an info window with the vendor name (always open)
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="padding:2px 6px; font-size:13px; font-weight:bold; white-space:nowrap;">
        <span style="color:${color === 'blue' ? 'blue' : 'black'};">${vendorName}</span>
      </div>
    `,
    disableAutoPan: true
  });
  infoWindow.open(this.map, marker);  // Open the info window

  // Hide all close buttons (ensures consistency across multiple info windows)
  google.maps.event.addListener(infoWindow, 'domready', () => {
    document.querySelectorAll('.gm-ui-hover-effect').forEach((closeBtn) => {
      (closeBtn as HTMLElement).style.display = 'none';
    });
  });

    }
  }




  // Add a marker for the custom user location on the map
  addCustomLocationMarker(location: google.maps.LatLngLiteral): void {
    if (this.map) {
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: this.customLocation,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
      });

    const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="padding:2px 6px; font-size:13px; font-weight:bold; white-space:nowrap;">
        <span style="color:blue;">${this.customUserName}</span>
      </div>
    `,
    disableAutoPan: true
  });
  infoWindow.open(this.map, marker);  // Open the info window

  // Hide all close buttons (ensures consistency across multiple info windows)
  google.maps.event.addListener(infoWindow, 'domready', () => {
    document.querySelectorAll('.gm-ui-hover-effect').forEach((closeBtn) => {
      (closeBtn as HTMLElement).style.display = 'none';
    });
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
          let color = 'white';
  const vendorColor = (color || '').toUpperCase();
  if (vendorColor === 'RED') color = 'red';
  else if (vendorColor === 'YELLOW') color = 'yellow';
  else if (vendorColor === 'GREEN') color = 'green';

  this.addVendorMarker(
    location,
    vendorName,
    color, // ✅ now correct
    res.results[0].formatted_address
  );

          // Update the map bounds
          this.updateMap(location);
        } else {
          console.error('Could not find location for the vendor.');
        }
      });
    }
  }
}
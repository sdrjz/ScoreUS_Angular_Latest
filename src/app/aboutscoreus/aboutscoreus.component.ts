import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../services/appService/generalApiService';

@Component({
  selector: 'app-aboutscoreus',
  templateUrl: './aboutscoreus.component.html',
  styleUrls: ['./aboutscoreus.component.css']
})
export class AboutscoreusComponent implements OnInit {

  constructor(private _apiService :GeneralApiService) { }

  ngOnInit(): void {}
  

  openPopup(): void {
    const popup = document.getElementById("videoPopup") as HTMLElement;
    const video = document.getElementById("demoVideo") as HTMLVideoElement;

    if (popup && video) {
      popup.style.display = "block";
      video.play();
    }
  }

  closePopup(): void {
    const popup = document.getElementById("videoPopup") as HTMLElement;
    const video = document.getElementById("demoVideo") as HTMLVideoElement;

    if (popup && video) {
      popup.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }
  }
}

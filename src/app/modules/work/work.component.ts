import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works = [
    { name: "Royal Ride", image: " ../../../assets/img/work/royalride.PNG", live: "https://royalrideexpress.com/", source: "https://github.com/Khingdave1/Royal-Value-Logistics" },
    { name: "Super Trade", image: " ../../../assets/img/work/supertrade.PNG", live: "https://www.supertradeinvestment.com/", source: "https://github.com/Khingdave1/STInvestment" },
    { name: "PerlFood", image: " ../../../assets/img/work/perlfood.PNG", live: "https://affectionate-leavitt-11a91e.netlify.app", source: "https://github.com/Khingdave1/Perlfoodapp" },
    { name: "LMconstruct", image: " ../../../assets/img/work/lmconstruct.PNG", live: "https://lmconstruction.netlify.app/", source: "https://github.com/Khingdave1/LMConstruct" },
    { name: "To-do-list", image: " ../../../assets/img/work/to-do-list.PNG", live: "https://wizardly-ptolemy-b340fd.netlify.app/", source: "https://github.com/Khingdave1/To-do-List" },
    { name: "Weather", image: " ../../../assets/img/work/weather.PNG", live: "https://confident-mirzakhani-362839.netlify.app/", source: "https://github.com/Khingdave1/Weather-report" },
    { name: "Iconstruct", image: " ../../../assets/img/work/iconstruct.PNG", live: "https://laughing-wing-86b108.netlify.app/", source: "https://github.com/Khingdave1/Iconstruct" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

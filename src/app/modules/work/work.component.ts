import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works = [
    {
      name: "Royal Ride",
      image: " ../../../assets/img/work/royalride.PNG",
      live: "https://royalrideexpress.com/",
      source: "https://github.com/Khingdave1/Royal-Value-Logistics",
      technologies: [
        { name: "html" },
        { name: "scss" },
        { name: "Javascipt" },
      ]
    },

    {
      name: "Super Trade",
      image: " ../../../assets/img/work/supertrade.PNG",
      live: "https://www.supertradeinvestment.com/",
      source: "https://github.com/Khingdave1/STInvestment",
      technologies: [
        { name: "angular" },
        { name: "firebase" },
      ]
    },

    {
      name: "PerlFood",
      image: " ../../../assets/img/work/perlfood.PNG",
      live: "https://affectionate-leavitt-11a91e.netlify.app",
      source: "https://github.com/Khingdave1/Perlfoodapp",
      technologies: [
        { name: "angular" },
        { name: "scss" },
        { name: "firebase" },
      ]
    },

    {
      name: "DevFest Mpape",
      image: " ../../../assets/img/work/devfest.PNG",
      live: "https://gdgmpape.com",
      source: "https://github.com/Khingdave1/Perlfoodapp",
      technologies: [
        { name: "angular" }
      ]
    },

    {
      name: "LMconstruct",
      image: " ../../../assets/img/work/lmconstruct.PNG",
      live: "https://lmconstruction.netlify.app/",
      source: "https://github.com/Khingdave1/LMConstruct",
      technologies: [
        { name: "html" },
        { name: "css" },
        { name: "Javascipt" },
      ]
    },

    {
      name: "To-do-list",
      image: " ../../../assets/img/work/to-do-list.PNG",
      live: "https://wizardly-ptolemy-b340fd.netlify.app/",
      source: "https://github.com/Khingdave1/To-do-List",
      technologies: [
        { name: "html" },
        { name: "css" },
        { name: "Javascipt" },
      ]
    },

    {
      name: "Weather",
      image: " ../../../assets/img/work/weather.PNG",
      live: "https://confident-mirzakhani-362839.netlify.app/",
      source: "https://github.com/Khingdave1/Weather-report",
      technologies: [
        { name: "html" },
        { name: "css" },
        { name: "Javascipt" },
      ]
    },

    {
      name: "Iconstruct",
      image: " ../../../assets/img/work/iconstruct.PNG",
      live: "https://laughing-wing-86b108.netlify.app/",
      source: "https://github.com/Khingdave1/Iconstruct",
      technologies: [
        { name: "html" },
        { name: "bootstrap" }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

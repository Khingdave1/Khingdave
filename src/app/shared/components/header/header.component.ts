import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hamClick: any;
  prefersDarkScheme: any;
  currentTheme: any;

  constructor() { }

  ngOnInit(): void {
    // Check for dark mode preference at the OS level
    this.prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Get the user's theme preference from local storage, if it's available
    this.currentTheme = localStorage.getItem("theme");
    // If the user's preference in localStorage is dark...
    if (this.currentTheme == "dark") {
      // ...let's toggle the .dark-theme class on the body
      document.body.classList.toggle("dark-mode");
      // Otherwise, if the user's preference in localStorage is light...
    } else if (this.currentTheme == "light") {
      // ...let's toggle the .light-theme class on the body
      document.body.classList.toggle("light-mode");
    }
  }

  // Toggle Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

  toggleDarkMode() {
    // If the user's OS setting is dark and matches our .dark-mode class...
    if (this.prefersDarkScheme.matches) {
      // ...then toggle the light mode class
      document.body.classList.toggle("light-mode");
      // ...but use .dark-mode if the .light-mode class is already on the body,
      var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    } else {
      // Otherwise, let's do the same thing, but for .dark-mode
      document.body.classList.toggle("dark-mode");
      var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    }
    // Finally, let's save the current preference to localStorage to keep using it
    localStorage.setItem("theme", theme);

  }

}

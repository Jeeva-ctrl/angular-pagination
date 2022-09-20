import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  links = ['comments', 'photos'];
  selectedIndex = 0;
  constructor(private router: Router) {}
  ngOnInit() {
    console.log('links => ', this.links);
  }
  changeRoute(routeValue) {
    this.router.navigate([routeValue]);
  }
}

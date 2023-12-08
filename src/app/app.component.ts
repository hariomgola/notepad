import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  componentHeader = 'Next generation notepad';
  constructor(private router: Router, route: ActivatedRoute) {}
  ngOnInit() {
    this.router.navigate(['']);
  }
}

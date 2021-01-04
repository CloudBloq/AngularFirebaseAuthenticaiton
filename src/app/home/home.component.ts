import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventEmiterService } from './../services/event.emmiter.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sub: Subscription;

  constructor(private _eventEmiter: EventEmiterService, private router: Router) { }
  ngOnInit(): void {
    this.sub = this.router
      .data
      .subscribe(v => {
        console.log(v);
        this._eventEmiter.logOut(v)
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();

  }

  logout() {
    this.sub = this.router
      .data
      .subscribe(v => {
        console.log(v);
        this._eventEmiter.logOut(v)
      });
  }

}

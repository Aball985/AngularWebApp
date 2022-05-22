import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private spinnerService: NgxSpinnerService) {}

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }

  title: string = 'angular-app';

  getCatsFirstName() {
    this.title = 'Cats';
  }
}

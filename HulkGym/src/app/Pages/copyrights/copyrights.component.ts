import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-copyrights',
  templateUrl: './copyrights.component.html',
  styleUrls: ['./copyrights.component.css']
})
export class CopyrightsComponent implements OnInit {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
  }

}

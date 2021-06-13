import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  NavLogo = "../../../assets/Pictures/logo-white.png";
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
  }
  useLanguage(language: string): void {
    this.translate.use(language);
}
}

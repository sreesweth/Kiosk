import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KioskPWA';
  isDarkTheme: Observable<boolean>;
  theme:  Observable<string>;

  constructor(private themeService: ThemeService, private activeRoute: ActivatedRoute) {
    // this.activeRoute.params.subscribe(params => {
    //   console.log(params['client'])
    // })
   }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.theme = this.themeService.themeName;
  }
}

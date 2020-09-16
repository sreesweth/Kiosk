import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isDarkTheme: Observable<boolean>;
  tiles: string[] = [
    'Hi there!',
    'I\'m a custom component',
    'Toggle the dark theme',
    'This background is the accent color',
    'The borders have card background color',
    'The font is \'Pacifico\'',
    'The tile list scrolls vertically',
    'This is the last tile'
  ];
  constructor(private themeService: ThemeService, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      const tenant = params['client'];
      this.themeService.getTenantInfo(tenant ? tenant : '').subscribe(res => {
        console.log(res);
      });
    });
   }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(isDarkTheme: boolean) {
    this.themeService.setDarkTheme(isDarkTheme);
  }

}

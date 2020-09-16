import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListItemComponent implements OnInit {

  navList = [
    {
      name: 'Home',
      icon: 'home'
    },
    {
      name: 'patrons',
      icon: 'account_box'
    },
    {
      name: 'Personnel',
      icon: 'supervisor_account'
    },
    {
      name: 'Cources',
      icon: 'class'
    },
    {
      name: 'Reports',
      icon: 'analytics'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenuItem } from 'src/app/models/menu-item.interface';
import { DataService } from '../../../shared/services/data.service';
import { SCREEN_SIZE } from 'src/app/models/constants/screen-size.enum';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.scss']
})
export class MenuItemDetailsComponent implements OnInit {

  selectedItemName: string;
  selectedItem: IMenuItem;
  screenSize: SCREEN_SIZE;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
      this.activeRoute.params.subscribe(params => {
        this.selectedItemName = params.name;
        if (this.selectedItemName) {
          this.getSelectedItemDetailsByName(this.selectedItemName);
        }
      });
      this.dataService.screenSize.subscribe(size => {
        this.screenSize = size;
      });
  }

  ngOnInit(): void {
  }

  getSelectedItemDetailsByName(name): void {
    this.dataService.getMenuItemByName(name).subscribe(item => {
      if (item) {
        this.selectedItem = item;
        console.log(item);
      }
    });
  }
}

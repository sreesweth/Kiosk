import { Component, OnInit } from '@angular/core';
import { MenuGroups } from '../../../data/menu-groups';
import { IMenuGroup } from 'src/app/models/menu-group.interface';
import { IMenuItem } from 'src/app/models/menu-item.interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DataService } from '../../services/data.service';
import { SCREEN_SIZE } from '../../../models/constants/screen-size.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuGroups: Array<IMenuGroup>;
  mainMenuGroup: IMenuGroup;
  selectMenuGroup: IMenuGroup;
  screenSize: SCREEN_SIZE;

  constructor(private dataService: DataService,
              private breakpointObserver: BreakpointObserver) {
                this.dataService.screenSize.subscribe(size => {
                  this.screenSize = size;
                  this.getMenuGroupData();
                });

   }

  ngOnInit(): void {
  }

  getMenuGroupData(): void {
    this.menuGroups = JSON.parse(JSON.stringify(MenuGroups));
    const index = this.menuGroups.findIndex(item => item.type === 'main');
    if (index !== -1) {
      this.mainMenuGroup = this.menuGroups[index];
      this.onGroupSelect(this.mainMenuGroup);
    }
    if (this.screenSize === SCREEN_SIZE.XL || this.screenSize === SCREEN_SIZE.LG || this.screenSize === SCREEN_SIZE.MD) {
      if (index !== -1) {
        this.menuGroups.splice(index, 1);
      }
    }
  }

  onGroupSelect(selectedItem: IMenuGroup): void {
    this.selectMenuGroup = selectedItem;
    this.dataService.setSelectedMenuGroup(selectedItem);
  }

  checkSelected(item: IMenuGroup): boolean {
    if (item && item.id && this.selectMenuGroup && this.selectMenuGroup.id) {
      return item.id === this.selectMenuGroup.id;
    }
    return false;
  }

}

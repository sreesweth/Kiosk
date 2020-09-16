import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IMenuGroup } from 'src/app/models/menu-group.interface';
import { SCREEN_SIZE } from 'src/app/models/constants/screen-size.enum';
import { IMenuItem } from 'src/app/models/menu-item.interface';
import { MenuGroups } from '../../data/menu-groups';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _selectedMenuGroup: BehaviorSubject<IMenuGroup> = new BehaviorSubject<IMenuGroup>(null);
  private _screenSize: BehaviorSubject<SCREEN_SIZE> = new BehaviorSubject<SCREEN_SIZE>(null);

  get SelectedMenuGroup(): Observable<IMenuGroup> {
    return this._selectedMenuGroup.asObservable();
  }
  get screenSize(): Observable<SCREEN_SIZE> {
    return this._screenSize.asObservable();
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      let screenSize: SCREEN_SIZE;
      if (result.breakpoints[Breakpoints.XSmall]) {
        screenSize = SCREEN_SIZE.XS;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        console.log('sm', Breakpoints.Small);
        screenSize = SCREEN_SIZE.SM;
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        screenSize = SCREEN_SIZE.MD;
      }
      if (result.breakpoints[Breakpoints.Large]) {
        screenSize = SCREEN_SIZE.LG;
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        screenSize = SCREEN_SIZE.XL;
      }
      this._screenSize.next(screenSize);
    });
  }

  setSelectedMenuGroup(selectedGroup: IMenuGroup): void {
    this._selectedMenuGroup.next(selectedGroup);
  }

  getMenuItemByName(itemName: string): Observable<IMenuItem> {
    let selectedMenuItem: IMenuItem;
    const menuGroup: IMenuGroup[] = JSON.parse(JSON.stringify(MenuGroups));
    menuGroup.forEach(x => {
      const index = x.menuItems.findIndex(item => item.name === itemName);
      if (index !== -1) {
        selectedMenuItem = x.menuItems[index];
        return;
      }
    });

    return Observable.create((observer) => {
      observer.next(selectedMenuItem);
      observer.complete();
    });
  }
}

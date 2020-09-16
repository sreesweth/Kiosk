import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { IMenuGroup } from 'src/app/models/menu-group.interface';
import { Observable } from 'rxjs';
import { IMenuItem } from 'src/app/models/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  selectedMenuGroup$: Observable<IMenuGroup>;

  constructor(private dataService: DataService) {
    this.selectedMenuGroup$ = this.dataService.SelectedMenuGroup;
   }

  ngOnInit(): void {
  }

  onMenuSelect(selectedItem: IMenuItem): void {
    console.log(selectedItem);
  }
}

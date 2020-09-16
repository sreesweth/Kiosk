import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMenuGroup } from '../../../models/menu-group.interface';

@Component({
  selector: 'app-menu-group-item',
  templateUrl: './menu-group-item.component.html',
  styleUrls: ['./menu-group-item.component.scss']
})
export class MenuGroupItemComponent implements OnInit {

  @Input() groupInfo: IMenuGroup;
  @Input() isSelected: boolean;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;

  @Output() onSelect:EventEmitter<IMenuGroup> = new EventEmitter<IMenuGroup>()

  constructor() { }

  ngOnInit(): void {

  }
  onSelection() {
    this.onSelect.emit(this.groupInfo);
  }

}

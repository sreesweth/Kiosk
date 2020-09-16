import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGroupItemComponent } from './menu-group-item.component';

describe('MenuGroupItemComponent', () => {
  let component: MenuGroupItemComponent;
  let fixture: ComponentFixture<MenuGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

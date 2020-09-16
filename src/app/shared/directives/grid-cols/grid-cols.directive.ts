
import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IGridColumns } from '../../../models/grid-column.interface';

@Directive({
  selector: '[gridCols]'
})
export class GridColsDirective implements OnInit {

  private gridCols: IGridColumns = { xs: 1, sm: 2, md: 4, lg: 6, xl: 8 };

  public get cols(): IGridColumns {
    return this.gridCols;
  }

  @Input('gridCols')
  public set cols(map: IGridColumns) {
    if (map && ('object' === (typeof map))) {
      this.gridCols = map;
    }
  }

  public constructor(private grid: MatGridList, private breakpointObserver: BreakpointObserver) {
    if (this.grid != null) {
      this.grid.cols = this.gridCols.md;
    }
  }

  public ngOnInit(): void {
    if (this.grid != null) {
      this.grid.cols = this.gridCols.md;
    }
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {

      if (result.breakpoints[Breakpoints.XSmall]) {
        console.log('xs', Breakpoints.XSmall);
        this.grid.cols = this.gridCols.xs;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        console.log('sm', Breakpoints.Small);
        this.grid.cols = this.gridCols.sm;
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        console.log('md', Breakpoints.Medium);
        this.grid.cols = this.gridCols.md;
      }
      if (result.breakpoints[Breakpoints.Large]) {
        console.log('lg', Breakpoints.Large);
        this.grid.cols = this.gridCols.lg;
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        console.log('xl', Breakpoints.XLarge);
        this.grid.cols = this.gridCols.xl;
      }
    });
  }
}
import { BasicGridComponent } from './basic-grid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule, FilterService, PageService, PagerModule,EditService, ToolbarService, SortService, CommandColumnService } from '@syncfusion/ej2-angular-grids';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [BasicGridComponent],
  imports: [
    CommonModule,
    GridModule, 
    PagerModule,
    DatePickerAllModule,
    FormsModule
  ],
  exports:[BasicGridComponent],
  providers:[FilterService, PageService,EditService, ToolbarService, SortService, CommandColumnService]
})
export class BasicGridModule { }

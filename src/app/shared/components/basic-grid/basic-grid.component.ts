import { Component, OnInit } from '@angular/core';
import { FilterSettingsModel,EditSettingsModel,ToolbarItems, IEditCell,CommandModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.scss']
})
export class BasicGridComponent implements OnInit {

  //Syncfusion
  public data: object[];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public numericParams: IEditCell;
  public ddParams: IEditCell;
  public dpParams: IEditCell;
  public boolParams: IEditCell;
  public commands: CommandModel[];
  allowFiltering:boolean= true;
  allowAdd:boolean= true;
  allowEdit:boolean= true;
  
  constructor() { }

  ngOnInit(): void 
  {
    this.data = [
      {
        UserID:10248,
        Name:"Mohamed Ali",
        Satuts:"Active",  
      },
      {
        UserID:10249,
        Name:"Aya Ali",
        Satuts:"Disabled",    
      },
      {
        UserID:10250,
        Name:"Ahmed Mahmoud",
        Satuts:"Active",    
      },
      {
        UserID:10251,
        Name:"Ali Yousef",
        Satuts:"Active",    
      },
      {
        UserID:10252,
        Name:"Amira omar",
        Satuts:"Disabled",    
      },
      {
        UserID:10253,
        Name:"Radwa Mohamed",
        Satuts:"Active",    
      },
      {
        UserID:10254,
        Name:"Nora Ahmed",
        Satuts:"Active",    
      },
      {
        UserID:10254,
        Name:"Nermin Ahmed",
        Satuts:"Disabled",    
      },
    ];
    //Edit on the same row
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    //Toolbar above the table
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    //Params in the row
    this.numericParams = { params: { decimals: 2, value: 5 } };
    // this.ddParams = { params: { value: 'Germany' } };
    // this.dpParams = { params: {value: new Date() } };
    this.boolParams = { params: {checked: true } };
    //Commands using edit, delete, save and cancel icons in the same row
    this.commands = [{ type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
    { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
    { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
    { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }];
  }

}

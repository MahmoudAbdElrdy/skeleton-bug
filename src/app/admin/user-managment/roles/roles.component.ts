import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  editMode:boolean = true;
  saveCancelMode:boolean = false;
  deleteMode:boolean = true;
  permissionMode:boolean = true;

  constructor() { }

  ngOnInit(): void { }


  onEditItem(){
    this.editMode = false;
    this.saveCancelMode = true;
    this.deleteMode = false;
    this.permissionMode = false;
  }

  onSaveCancelItem(){
    this.editMode = true;
    this.saveCancelMode = false;
    this.deleteMode = true;
    this.permissionMode = true;
  }

}

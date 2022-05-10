import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {InventoryService} from '../../services/inventory.service';

export interface PeriodicElement {
  name: string;
  description: string;
  price: string;
  category: string;
}


@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'category', 'description', 'edit-action', 'remove-action'];
  inventoryList: any;
  dataSource: any;
  isAnySelected = false;
  isSingleSelected = false;
  singleSelectedInventory = null;
  multipleSelectedInventory: number[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getInventoryList();
  }

  editInventory(inventory: any): void {
    console.log(inventory);
    sessionStorage.setItem('InventoryForEdit', JSON.stringify(inventory));
  }

  deleteInventory(inventory: any){
    console.log(inventory);
    this.inventoryService.deleteInventory(inventory._id).subscribe((data: any) =>{
      console.log(data);
      if(data.status == 200) {
        this.getInventoryList();
      }
    });
  }

  toggleIsAnySelected() {
    const list = this.inventoryList.filter((item:any) => item.isSelected);
    this.isAnySelected = list.length > 0;
    this.isSingleSelected = list.length == 1;
    if(this.isSingleSelected) {
      this.singleSelectedInventory = list[0];
      this.multipleSelectedInventory = list[0]._id;
      console.log(this.multipleSelectedInventory);
    } else if(this.isAnySelected){

      this.multipleSelectedInventory = list.map(function(value: any){
        return value._id;
      });
      console.log(this.multipleSelectedInventory);
    }
  }

  masterToggle(e: any): void {
    console.log(e);
    this.inventoryList.forEach((item: any) => {
      item.isSelected = e.checked;
    });

    this.toggleIsAnySelected();
  }

  toggle(e: any, element: any):  void {
    console.log(element);
    const inventorys = this.inventoryList.filter((item: any) => item._id == element._id);
    if(inventorys.length > 0) {
      inventorys[0].isSelected = e.checked;
    }
    this.toggleIsAnySelected();
  }

  getInventoryList() {
    this.inventoryService.getInventories().subscribe((data: any) => {
      this.inventoryList = data.result;
      this.inventoryList.forEach((item: any) => {
        item.isSelected = false;
      });
      console.log(this.inventoryList);

      this.dataSource = this.inventoryList;
      console.log(this.dataSource);
    });
  }
}

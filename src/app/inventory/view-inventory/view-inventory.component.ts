import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';

export interface PeriodicElement {
  firstName: string;
  lastname: string;
  emailAddress: string;
  phoneNumber: string;
  dob: string;
  department: string;
}

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'firstName', 'lastName', 'emailAddress', 'phoneNumber', 'dob', 'department'];
  
  dataSource: any;
  inventoryId: string = '';
  inventory: any;
  constructor(private activatedRoute: ActivatedRoute, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.inventoryId = data.id;
    });

    this.inventoryService.getInventoryById(this.inventoryId).subscribe((data: any) => {
      this.inventory = data.result;
      this.dataSource = [this.inventory];
    });
  }

}

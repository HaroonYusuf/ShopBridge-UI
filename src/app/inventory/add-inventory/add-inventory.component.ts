import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  inventoryData: any;
  addInventory: any;

  constructor(private inventoryService: InventoryService,
    private snackbar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inventoryData = sessionStorage.getItem('InventoryForEdit');
    this.inventoryData = JSON.parse(this.inventoryData);
    console.log(this.inventoryData);
    sessionStorage.removeItem('InventoryForEdit');
    if (this.inventoryData) {
      this.addInventory = this.formBuilder.group({
        name: new FormControl(this.inventoryData.name, [Validators.required, Validators.minLength(3)]),
        description: new FormControl(this.inventoryData.description, [Validators.required, Validators.minLength(3)]),
        price: new FormControl(this.inventoryData.price, [Validators.required]),
        category: new FormControl(this.inventoryData.category, [Validators.required])
      })
    }
    else {
      this.addInventory = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        description: new FormControl('', [Validators.required, Validators.minLength(3)]),
        price: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required])
      })
    }
  }





  submit() {
    console.log(this.addInventory.value);
    let ID = this.addInventory.value.id
    if (this.addInventory.value.id) {
      this.inventoryService.updateInventory(ID, this.addInventory.value).subscribe(data => {
        console.log(data);
        this.snackbar.open("Data Update Successfully", '', {
          duration: 3000
        });
        this.addInventory.reset();
        this.router.navigate(['/inventory']);
      })
    }
    else {
      this.inventoryService.createInventory(this.addInventory.value).subscribe(data => {
      console.log(data);
      this.snackbar.open("Data Added Successfully", '', {
        duration: 3000
      });
      
      this.addInventory.reset();
      this.router.navigate(['/inventory'])
      })
    }
  }

  cancel() {
    this.router.navigate(['inventory']);
  }

}

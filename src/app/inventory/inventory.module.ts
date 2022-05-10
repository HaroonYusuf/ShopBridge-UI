import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import {MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    InventoryComponent,
    ListInventoryComponent,
    AddInventoryComponent,
    ViewInventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatIconModule,
    RouterModule
  ]
})
export class InventoryModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { InventoryComponent } from './inventory.component';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';

const routes: Routes = [
  // {path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: '', component: ListInventoryComponent},
  { path: 'add', component: AddInventoryComponent},
  { path: 'edit', component: AddInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }

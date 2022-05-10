import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  getInventories() {
    let url =
      environment.INVENTORY_BASE_URL;
    return this.http.get(url);
  }

  getInventoryById(id: string) {
    let url =
      environment.INVENTORY_BASE_URL + '/' + id;
    return this.http.get(url);
  }

  createInventory(data: any) {
    let url = environment.INVENTORY_BASE_URL;
    return this.http.post(url, data);
  }

  updateInventory(id: number, data: any) {
    let url =
      environment.INVENTORY_BASE_URL;
    return this.http.put(url, data);
  }

  deleteInventory(id: number) {
    let url =
      environment.INVENTORY_BASE_URL + '?inventoryIds=' + id;
    console.log(url);
    return this.http.delete(url);
  }

  searchInventory(keyword: any) {}
}

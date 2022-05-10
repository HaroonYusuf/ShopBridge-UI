import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideNavItems:any = [];

  constructor() { }

  ngOnInit(): void {
    this.sideNavItems = [
      {
        name: 'Loans',
        route: '/loans',
        isActive: false
      },
      {
        name: 'Customers',
        route: '/customers',
        isActive: false
      },
      {
        name: 'Payments',
        route: '/payments',
        isActive: false
      },
      {
        name: 'Invoices',
        route: 'invoices',
        isActive: false
      },
      {
        name: 'Loan Plans',
        route: 'loan-types',
        isActive: false
      },
      {
        name: 'Reports',
        route: 'reports',
        isActive: false
      },
      {
        name: 'Settings',
        route: 'settings',
        isActive: false
      }
    ]
    // let currentPath = location.pathname;
    // let items = this.sideNavItems.filter((item: any) => item.route == currentPath);
    // if(items.length > 0) {
    //   items[0].isActive = true;
    // }
  }

  logout() {
    window.sessionStorage.removeItem('token');
  }

  open(item: any) {
    this.sideNavItems.forEach((e: any) => {
      e.isActive = false;
    });
    item.isActive = true;
  }
}

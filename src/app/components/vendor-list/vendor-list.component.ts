import { Component, OnInit } from '@angular/core';
import {VendorService} from 'src/app/service/vendor.service'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors :any;
  currentVendor =null as any ;
  currentIndex = -1;
  title = '';
  constructor(private vs:VendorService) { }

  ngOnInit(): void {
    this.retrieveVendors();
  }

  refreshList(): void {
    this.currentVendor = null;
    this.currentIndex = -1;
    this.retrieveVendors();
  }

  retrieveVendors(): void {
    this.vs.getAll().snapshotChanges().pipe(
        map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id,...c.payload.doc.data()})
          )
        )
    ).subscribe(data =>{
      this.vendors = data;
    });
  }
  setActiveVendor(vendor:any, index:number): void {
    this.currentVendor = vendor;
    this.currentIndex = index;
  }

}

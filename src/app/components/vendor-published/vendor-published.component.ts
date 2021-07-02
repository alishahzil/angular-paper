import { Component, OnInit } from '@angular/core';
import {VendorService} from 'src/app/service/vendor.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vendor-published',
  templateUrl: './vendor-published.component.html',
  styleUrls: ['./vendor-published.component.css']
})
export class VendorPublishedComponent implements OnInit {

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
      
      let newdata:any[] = [];
      for(let ar of data){
        if(ar.published == true){
          newdata.push(ar);
        }
      }
      console.log(newdata);
      this.vendors = newdata;
    });
  }
  setActiveVendor(vendor:any, index:number): void {
    this.currentVendor = vendor;
    this.currentIndex = index;
  }
}

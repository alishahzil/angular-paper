import { Component, OnInit } from '@angular/core';
import {VendorService} from 'src/app/service/vendor.service';
import Vendor from 'src/app/model/vendor.model';


@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  
  vendor:Vendor=new Vendor();
  submitted=false;

  constructor(private vs:VendorService) { }

  ngOnInit(): void {
  }
   
  saveVendor():void{
    this.vs.create(this.vendor).then(()=>{
      alert("Vendor save successfully.");
      this.submitted=true;
      })
  }
  newVendor():void{
    this.submitted=false;
    this.vendor=new Vendor();
    }

}

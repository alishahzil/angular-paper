import { Component, OnInit,Input,OnChanges,Output ,EventEmitter } from '@angular/core';
import {VendorService} from 'src/app/service/vendor.service';
import Vendor from 'src/app/model/vendor.model';


@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit,OnChanges {
  @Input() vendor?: Vendor ;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentVendor: Vendor ={
    title:'',
    description:'',
    published : false
  };
  message = '';

  constructor(private vs: VendorService) { }
  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentVendor = {... this.vendor}
  
    
  }
updatePublished(status :boolean): void {
  if(this.currentVendor.id){
    this.vs.update(this.currentVendor.id, { published: status })
      .then(() => {
      this.currentVendor.published = status;
      this.message = 'The status was updated successfully!';
    })
    .catch(err => console.log(err));
  }
}
updateVendor(): void {
const data = {
title: this.currentVendor.title,
description: this.currentVendor.description
};
 if (this.currentVendor.id){
    this.vs.update(this.currentVendor.id, data)
    .then(() => this.message = 'The vendor was updated successfully!')
    .catch(err => console.log(err));
    }
  }
deleteVendor(): void { 
  if(this.currentVendor.id){
  this.vs.delete(this.currentVendor.id).then(() => {
     this.refreshList.emit(); 
     this.message = 'The vendor was deleted successfully!'; 
    }).catch(err => console.log(err)); }
}
}

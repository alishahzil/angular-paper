import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';

const routes: Routes = [
  //{ path:'/', component:AppComponent },
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
   { path:'vendors/addvendor', component:AddVendorComponent }, 
  { path:'vendors/vendorlist', component:VendorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

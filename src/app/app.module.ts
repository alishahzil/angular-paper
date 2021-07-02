import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { VendorDetailsComponent } from './components/vendor-details/vendor-details.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';
import { VendorPublishedComponent } from './components/vendor-published/vendor-published.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVendorComponent,
    VendorDetailsComponent,
    VendorListComponent,
    VendorPublishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

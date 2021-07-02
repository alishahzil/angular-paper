import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import  Vendor   from '../model/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private dbPath = '/vendors';
  vendorRef: AngularFirestoreCollection<Vendor>;

  constructor(private db: AngularFirestore) {
  this.vendorRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Vendor> {
    return this.vendorRef;
  }

  create(vendor: Vendor): any {
   return this.vendorRef.add({...vendor});
  }

  update(id: string, data: any): Promise<void> {
    return this.vendorRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.vendorRef.doc(id).delete();
  }
}

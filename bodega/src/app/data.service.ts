import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Cart } from './models/Cart';
import { Product } from './models/Product';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  productCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productoFilter$: BehaviorSubject<string | null>;

  cartCollection: AngularFirestoreCollection<Cart>;
  carts: Observable<Cart[]>;
  cartDoc: AngularFirestoreDocument<Cart>;




  constructor(public afs: AngularFirestore) {

  }





  addCompra(producto: string, cantidad: number, subtotal: number) {
    this.cartCollection = this.afs.collection<Product>('compra');
    const compra: Cart = { producto, cantidad, subtotal };
    this.cartCollection.add(compra);

  }

  deleteCompra(id: any) {
    this.afs.doc<Cart>('compra/' + id).delete()

  }

  getCompra() {
    this.cartCollection = this.afs.collection<Product>('compra');
    return this.carts = this.cartCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Cart;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }



  getProductos() {
    this.productCollection = this.afs.collection<Product>('producto');
    return this.products = this.productCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  searchProduct(start) {
    const end = start + '\uf8ff';
    return this.afs.collection('producto', ref =>
      ref
        .orderBy('nombre')
        .limit(5)
        .startAt(start)
        .endAt(end)
    )


  }

  updateProductos(id: any, nombre: string, precio: number, cantidad: number) {
    this.afs.doc<Product>('producto/' + id).update({ nombre, precio, cantidad })

  }
}

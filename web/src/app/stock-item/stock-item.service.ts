import { Injectable } from '@angular/core';
import {StockItem} from './stock-item';
import {setDoc, Firestore, doc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StockItemService {

  constructor(private firestore: Firestore) { }

  createNewItem(stockItem: StockItem) {
    const ref = doc(this.firestore, `stockItems/${stockItem.sku}`);
    return setDoc(ref, stockItem, {merge: true});
  }

}

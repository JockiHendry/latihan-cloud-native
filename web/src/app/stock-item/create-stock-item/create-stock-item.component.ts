import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {StockItemService} from '../stock-item.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-stock-item',
  templateUrl: './create-stock-item.component.html',
  styleUrls: ['./create-stock-item.component.scss']
})
export class CreateStockItemComponent  {

  form = this.fb.group({
    sku: ['', Validators.required],
    name: ['', Validators.required],
    category: ['', Validators.required],
    quantity: [0, Validators.min(0)],
  });

  constructor(private fb: FormBuilder, private stockItemService: StockItemService, private snackbar: MatSnackBar,
              private route: ActivatedRoute, private router: Router) { }

  save() {
    if (!this.form.valid) {
      this.snackbar.open('Maaf, data masih belum terisi dengan benar.', '', {duration: 30000});
      return;
    }
    this.stockItemService.createNewItem(this.form.value).then(() => {
      this.snackbar.open(`Item ${this.form.value.name} berhasil ditambahkan.`, '', {duration: 30000});
      this.router.navigate(['../'], {relativeTo: this.route});
    }).catch((err) => {
      console.log(err);
      this.snackbar.open(err, '', {duration: 30000});
    });
  }

}

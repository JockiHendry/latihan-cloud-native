import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListStockItemComponent} from './list-stock-item/list-stock-item.component';
import {CreateStockItemComponent} from './create-stock-item/create-stock-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {StockItemRoutingModule} from './stock-item-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgAisModule} from 'angular-instantsearch';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ListStockItemComponent,
    CreateStockItemComponent
  ],
    imports: [
        CommonModule,
        StockItemRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FlexModule,
        MatButtonModule,
        MatSnackBarModule,
        NgAisModule,
        MatTableModule,
    ]
})
export class StockItemModule { }

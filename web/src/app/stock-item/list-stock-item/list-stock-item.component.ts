import { Component } from '@angular/core';
import {environment} from '../../../environments/environment';
import {InstantSearchConfig} from 'angular-instantsearch/instantsearch/instantsearch';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);

@Component({
  selector: 'app-list-stock-item',
  templateUrl: './list-stock-item.component.html',
  styleUrls: ['./list-stock-item.component.scss']
})
export class ListStockItemComponent  {

  readonly algoliaConfig: InstantSearchConfig = {
    searchClient: searchClient,
    indexName: 'STOCK_ITEMS'
  }

  displayedColumns = ['sku', 'name', 'category', 'quantity'];

  constructor() { }

}

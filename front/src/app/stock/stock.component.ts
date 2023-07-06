import { Component } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  faTrashCan = faTrashCan;
  articles: Article[] = [
    { id: '1', name: 'tournevis', price: 2.75, qty: 120 },
    { id: '2', name: 'marteau', price: 5.78, qty: 48 },
    { id: '3', name: 'vis', price: 0.06, qty: 540 },
    { id: '4', name: 'clou', price: 0.03, qty: 540 },
  ];

  getArticleId(index: number, a: Article) {
    return a.id;
  }
}

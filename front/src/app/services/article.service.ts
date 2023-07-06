import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { id: '1', name: 'tournevis', price: 2.75, qty: 120 },
    { id: '2', name: 'marteau', price: 5.78, qty: 48 },
    { id: '3', name: 'vis', price: 0.06, qty: 540 },
    { id: '4', name: 'clou', price: 0.03, qty: 540 },
  ];

  constructor() {}
}
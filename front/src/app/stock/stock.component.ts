import { Component, OnInit } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import {
  faCircleNotch,
  faPlus,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import { catchError, delay, finalize, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  errorMsg = '';
  faCircleNotch = faCircleNotch;
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;
  isRemoving = false;
  selectedArticles = new Set<Article>();
  isRefreshing = false;

  constructor(protected readonly articleService: ArticleService) {}

  ngOnInit(): void {
    if (this.articleService.articles$.value === undefined) {
      // articleService.refresh();
      of(undefined)
        .pipe(
          delay(300),
          switchMap(() => this.articleService.refresh())
        )
        .subscribe();
    }
  }

  getArticleId(index: number, a: Article) {
    return a.id;
  }

  refresh() {
    console.log('refresh');
    of(undefined)
      .pipe(
        tap(() => {
          this.errorMsg = '';
          this.isRefreshing = true;
        }),
        delay(300),
        switchMap(() => {
          return this.articleService.refresh();
        }),
        catchError((err) => {
          console.log('err: ', err);
          this.errorMsg = 'Erreur technique';
          return of(undefined);
        }),
        finalize(() => {
          this.isRefreshing = false;
        })
      )
      .subscribe();
  }

  remove() {
    console.log('remove');
    of(undefined)
      .pipe(
        tap(() => {
          this.errorMsg = '';
          this.isRemoving = true;
        }),
        delay(300),
        switchMap(() => {
          // spread operator ...
          // permet de recopier les elements d'ensemble dans le tableau ...this.selectedArticles
          const ids = [...this.selectedArticles].map((a) => a.id);
          return this.articleService.remove(ids);
        }),
        switchMap(() => {
          return this.articleService.refresh();
        }),
        tap(() => {
          this.selectedArticles.clear();
        }),
        catchError((err) => {
          console.log('err: ', err);
          this.errorMsg = 'Erreur technique';
          return of(undefined);
        }),
        finalize(() => {
          this.isRemoving = false;
        })
      )
      .subscribe();
  }

  select(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }
}

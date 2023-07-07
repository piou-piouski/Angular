import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponent } from './stock.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [StockComponent],
    });
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

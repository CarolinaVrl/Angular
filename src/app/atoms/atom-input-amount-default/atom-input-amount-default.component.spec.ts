import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomInputAmountDefaultComponent } from './atom-input-amount-default.component';

describe('AtomInputAmountDefaultComponent', () => {
  let component: AtomInputAmountDefaultComponent;
  let fixture: ComponentFixture<AtomInputAmountDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomInputAmountDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomInputAmountDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

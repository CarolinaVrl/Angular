import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismCardAmountRequestDefaultComponent } from './organism-card-amount-request-default.component';

describe('OrganismCardAmountRequestDefaultComponent', () => {
  let component: OrganismCardAmountRequestDefaultComponent;
  let fixture: ComponentFixture<OrganismCardAmountRequestDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismCardAmountRequestDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismCardAmountRequestDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

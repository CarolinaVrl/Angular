import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomTextSolicitedDefaultComponent } from './atom-text-solicited-default.component';

describe('AtomTextSolicitedDefaultComponent', () => {
  let component: AtomTextSolicitedDefaultComponent;
  let fixture: ComponentFixture<AtomTextSolicitedDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomTextSolicitedDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomTextSolicitedDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

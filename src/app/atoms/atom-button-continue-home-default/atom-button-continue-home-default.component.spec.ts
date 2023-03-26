import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomButtonContinueHomeDefaultComponent } from './atom-button-continue-home-default.component';

describe('AtomButtonContinueHomeDefaultComponent', () => {
  let component: AtomButtonContinueHomeDefaultComponent;
  let fixture: ComponentFixture<AtomButtonContinueHomeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomButtonContinueHomeDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomButtonContinueHomeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

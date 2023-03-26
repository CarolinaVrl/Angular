import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomIconHomeDefaultComponent } from './atom-icon-home-default.component';

describe('AtomIconHomeDefaultComponent', () => {
  let component: AtomIconHomeDefaultComponent;
  let fixture: ComponentFixture<AtomIconHomeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomIconHomeDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomIconHomeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

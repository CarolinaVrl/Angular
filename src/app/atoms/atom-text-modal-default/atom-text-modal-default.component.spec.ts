import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomTextModalDefaultComponent } from './atom-text-modal-default.component';

describe('AtomTextModalDefaultComponent', () => {
  let component: AtomTextModalDefaultComponent;
  let fixture: ComponentFixture<AtomTextModalDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomTextModalDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomTextModalDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

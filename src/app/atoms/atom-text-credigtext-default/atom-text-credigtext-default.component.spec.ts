import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomTextCredigtextDefaultComponent } from './atom-text-credigtext-default.component';

describe('AtomTextCredigtextDefaultComponent', () => {
  let component: AtomTextCredigtextDefaultComponent;
  let fixture: ComponentFixture<AtomTextCredigtextDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomTextCredigtextDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomTextCredigtextDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomIconMessageModalDefaultComponent } from './atom-icon-message-modal-default.component';

describe('AtomIconMessageModalDefaultComponent', () => {
  let component: AtomIconMessageModalDefaultComponent;
  let fixture: ComponentFixture<AtomIconMessageModalDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomIconMessageModalDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomIconMessageModalDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

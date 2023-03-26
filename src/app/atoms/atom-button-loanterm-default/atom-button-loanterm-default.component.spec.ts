import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomButtonLoantermDefaultComponent } from './atom-button-loanterm-default.component';

describe('AtomButtonLoantermDefaultComponent', () => {
  let component: AtomButtonLoantermDefaultComponent;
  let fixture: ComponentFixture<AtomButtonLoantermDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomButtonLoantermDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomButtonLoantermDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

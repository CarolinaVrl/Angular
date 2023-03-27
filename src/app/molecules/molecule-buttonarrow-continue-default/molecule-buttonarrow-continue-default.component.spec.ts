import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeButtonarrowContinueDefaultComponent } from './molecule-buttonarrow-continue-default.component';

describe('MoleculeButtonarrowContinueDefaultComponent', () => {
  let component: MoleculeButtonarrowContinueDefaultComponent;
  let fixture: ComponentFixture<MoleculeButtonarrowContinueDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoleculeButtonarrowContinueDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeButtonarrowContinueDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

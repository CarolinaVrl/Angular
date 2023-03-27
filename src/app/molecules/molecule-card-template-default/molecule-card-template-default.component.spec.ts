import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeCardTemplateDefaultComponent } from './molecule-card-template-default.component';

describe('MoleculeCardTemplateDefaultComponent', () => {
  let component: MoleculeCardTemplateDefaultComponent;
  let fixture: ComponentFixture<MoleculeCardTemplateDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoleculeCardTemplateDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeCardTemplateDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

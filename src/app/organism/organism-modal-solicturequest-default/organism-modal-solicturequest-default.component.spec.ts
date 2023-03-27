import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismModalSolicturequestDefaultComponent } from './organism-modal-solicturequest-default.component';

describe('OrganismModalSolicturequestDefaultComponent', () => {
  let component: OrganismModalSolicturequestDefaultComponent;
  let fixture: ComponentFixture<OrganismModalSolicturequestDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismModalSolicturequestDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismModalSolicturequestDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

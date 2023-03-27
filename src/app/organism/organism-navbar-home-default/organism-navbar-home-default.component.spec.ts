import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismNavbarHomeDefaultComponent } from './organism-navbar-home-default.component';

describe('OrganismNavbarHomeDefaultComponent', () => {
  let component: OrganismNavbarHomeDefaultComponent;
  let fixture: ComponentFixture<OrganismNavbarHomeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismNavbarHomeDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismNavbarHomeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

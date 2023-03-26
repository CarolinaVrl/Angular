import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainpageHomeDefaultComponent } from './page-mainpage-home-default.component';

describe('PageMainpageHomeDefaultComponent', () => {
  let component: PageMainpageHomeDefaultComponent;
  let fixture: ComponentFixture<PageMainpageHomeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMainpageHomeDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMainpageHomeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

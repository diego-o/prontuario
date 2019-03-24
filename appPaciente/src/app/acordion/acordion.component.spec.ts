import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionPage } from './acordion.page';

describe('AcordionPage', () => {
  let component: AcordionPage;
  let fixture: ComponentFixture<AcordionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

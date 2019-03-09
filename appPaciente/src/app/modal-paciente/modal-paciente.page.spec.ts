import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPacientePage } from './modal-paciente.page';

describe('ModalPacientePage', () => {
  let component: ModalPacientePage;
  let fixture: ComponentFixture<ModalPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasLinksComponent } from './empresas-links.component';

describe('EmpresasLinksComponent', () => {
  let component: EmpresasLinksComponent;
  let fixture: ComponentFixture<EmpresasLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

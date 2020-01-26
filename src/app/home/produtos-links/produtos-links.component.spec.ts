import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosLinksComponent } from './produtos-links.component';

describe('ProdutosLinksComponent', () => {
  let component: ProdutosLinksComponent;
  let fixture: ComponentFixture<ProdutosLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

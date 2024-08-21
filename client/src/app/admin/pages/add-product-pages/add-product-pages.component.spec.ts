import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductPagesComponent } from './add-product-pages.component';

describe('AddProductPagesComponent', () => {
  let component: AddProductPagesComponent;
  let fixture: ComponentFixture<AddProductPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProductPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

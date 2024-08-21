import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardPagesComponent } from './dasboard-pages.component';

describe('DasboardPagesComponent', () => {
  let component: DasboardPagesComponent;
  let fixture: ComponentFixture<DasboardPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DasboardPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DasboardPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

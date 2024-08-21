import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDyamicComponent } from './dialog-dyamic.component';

describe('DialogDyamicComponent', () => {
  let component: DialogDyamicComponent;
  let fixture: ComponentFixture<DialogDyamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogDyamicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDyamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, Type } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-dyamic',
  templateUrl: './dialog-dyamic.component.html',
})
export class DialogDyamicComponent implements AfterViewInit{
  
  defaultHeader : string = 'Header';

  @Input() component : any;
  @Output() showComponent = new EventEmitter<boolean>();

  ref:  DynamicDialogRef | undefined;
  constructor(public dialogService: DialogService) {}

  show() {
    if(this.component as Type<any>) {
      this.ref = this.dialogService.open(this.component, 
        { 
          header: this.component.header,
          position: this.component.position,
        }
      );
    }
    this.ref?.onClose.subscribe(() => {
      this.showComponent.emit(false)
    })
  }

  ngAfterViewInit(): void {
    this.show()
  }
}

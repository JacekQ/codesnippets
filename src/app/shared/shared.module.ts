import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';
import { HttpLinkPipe } from './pipes/http-link.pipe';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [ModalWindowComponent, SimpleAlertViewComponent, HttpLinkPipe],
  exports: [ModalWindowComponent, SimpleAlertViewComponent, HttpLinkPipe]
})
export class SharedModule { }

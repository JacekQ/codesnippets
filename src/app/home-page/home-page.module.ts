import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { HomePageControllerComponent } from './home-page-controller/home-page-controller.component';
import { SimpleAlertViewComponent } from '../shared/simple-alert-view/simple-alert-view.component';
import { LanguageBarComponent } from './language-bar/language-bar.component';
import { SnippetAdderComponent } from './snippet-adder/snippet-adder.component';
import { SnippetCardComponent } from './snippet-card/snippet-card.component';
import { LanguageManagerService } from './services/language-manager.service';
import { SnippetManagerService } from './services/snippet-manager.service';
import { SnippetFormComponent } from './snippet-form/snippet-form.component';
import { EditFormComponent } from './snippet-form/edit-form.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HighlightJsModule
  ],
  declarations: [
    HomePageControllerComponent,
    LanguageBarComponent,
    SnippetAdderComponent,
    SnippetCardComponent,
    EditFormComponent,
    SnippetFormComponent
  ],
  entryComponents: [SimpleAlertViewComponent, SnippetFormComponent],
  exports: [HomePageControllerComponent, LanguageBarComponent],
  providers: [
    LanguageManagerService,
    SnippetManagerService,
    HighlightJsService
  ]
})
export class HomePageModule {}

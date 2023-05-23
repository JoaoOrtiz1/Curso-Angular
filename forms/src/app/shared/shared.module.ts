import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { DropdownService } from './services/dropdown.service';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
//import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormModule } from '../template-form/template-form.module';
import { DropdownService } from './services/dropdown.service';
import { VerificaEmailService } from './services/verifica-email';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { BaseFormComponent } from './base-form/base-form.component';
//import { ErrorMsgComponent } from './error-msg/error-msg.component';
//import { InputFieldComponent } from './input-field/input-field.component';
//import { BaseFormComponent } from './base-form/base-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    //FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent,
    
   // ErrorMsgComponent,
   // InputFieldComponent,
  ],
  exports: [
   // FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent,
    
    //ErrorMsgComponent,
    //InputFieldComponent,
  ],
  providers: [ DropdownService, VerificaEmailService ]
})
export class SharedModule { }

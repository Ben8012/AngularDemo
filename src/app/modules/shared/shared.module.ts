import { MatSelectDirective } from './directives/mat-select.directive';
import { FormUserComponent } from './components/form-user/form-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormUserComponent,
    MatSelectDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    FormsModule,
    FormUserComponent,
    MatSelectDirective
  ]
})
export class SharedModule { }

import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule} from './menu.routing.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }

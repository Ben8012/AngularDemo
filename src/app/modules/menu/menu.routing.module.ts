import { MenuComponent } from './menu.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const MENU_ROUTES: Routes = [
    {
         path: '', component: MenuComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(MENU_ROUTES)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }

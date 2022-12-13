import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const HOME_ROUTES: Routes = [
    {
         path: '', component: HomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(HOME_ROUTES)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

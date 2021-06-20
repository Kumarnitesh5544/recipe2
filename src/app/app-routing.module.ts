import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RecipeComponent } from './recipe/recipe.component';
import {OnerecipeComponent} from './onerecipe/onerecipe.component'


const routes: Routes = [
  {
    path:"",
    component:MainpageComponent
  },
   {
     path:"recipe/:id",
     component:RecipeComponent
   },
   {
     path:"onerecipe/:id",
     component:OnerecipeComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

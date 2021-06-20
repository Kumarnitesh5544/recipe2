import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RecipeComponent } from './recipe/recipe.component';
import {FormsModule} from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { OnerecipeComponent } from './onerecipe/onerecipe.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    RecipeComponent,
    MainpageComponent,
    OnerecipeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

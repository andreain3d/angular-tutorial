import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { ServerComponent } from './practice/server/server.component';
// import { ServersComponent } from './practice/servers/servers.component';
// import { WarningAlertComponent } from './practice/warning-alert/warning-alert.component';
// import { SuccessAlertComponent } from './practice/success-alert/success-alert.component';
// import { BindingPracticeComponent } from './practice/binding-practice/binding-practice.component';
// import { BindingPractice2Component } from './practice/binding-practice2/binding-practice2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
    // ServerComponent,
    // ServersComponent,
    // WarningAlertComponent,
    // SuccessAlertComponent,
    // BindingPracticeComponent,
    // BindingPractice2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

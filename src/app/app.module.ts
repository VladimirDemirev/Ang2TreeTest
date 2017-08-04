import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyTreeComponent } from './tree-component/tree.component';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  declarations: [
    AppComponent,
    MyTreeComponent
  ],
  imports: [
    FormsModule, BrowserModule, TreeModule
  ],
  providers: [MyTreeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { DataDependencyModule } from './data-dependency.module';
import { CoreDependencyModule } from './core-dependency.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataDependencyModule, CoreDependencyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

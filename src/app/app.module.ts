import { NewFruitDialogComponent } from './new-fruit-dialog/new-fruit-dialog.component';
import { MaterialModule } from './material.module';
import { DataDependencyModule } from './data-dependency.module';
import { CoreDependencyModule } from './core-dependency.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NewFruitDialogComponent],
  imports: [
    BrowserModule,
    DataDependencyModule,
    CoreDependencyModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

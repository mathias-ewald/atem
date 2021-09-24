import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SsrcViewerComponent } from './ssrc-viewer/ssrc-viewer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutService } from './services/layout/layout.service';
import { BoxComponent } from './box/box.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoxEditorComponent } from './box-editor/box-editor.component';
import { SsrcEditorComponent } from './ssrc-editor/ssrc-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SsrcViewerComponent,
    BoxComponent,
    BoxEditorComponent,
    SsrcEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  providers: [
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

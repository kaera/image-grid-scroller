import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TileComponent } from './tile/tile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VirtualScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

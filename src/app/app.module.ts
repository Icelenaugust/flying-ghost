import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhostComponent } from './ghost/ghost.component';
import { BeeComponent } from './bee/bee.component';
import { PirateComponent } from './pirate/pirate.component';
import { AngelComponent } from './angel/angel.component';
import { TractComponent } from './tract/tract.component';
import { FooterComponent } from './footer/footer.component';
import { FirstTextComponent } from './first-text/first-text.component';
import { RocketComponent } from './rocket/rocket.component';
import { FirstImageComponent } from './first-image/first-image.component';

@NgModule({
  declarations: [
    AppComponent,
    GhostComponent,
    BeeComponent,
    PirateComponent,
    AngelComponent,
    TractComponent,
    FooterComponent,
    FirstTextComponent,
    RocketComponent,
    FirstImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

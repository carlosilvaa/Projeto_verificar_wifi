import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { WifiDataComponent } from './pages/wifi-data/wifi-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraficsComponetComponent } from './pages/graphics/graphics-componet.component';
import { GraphsComponent } from './_components/graphs/graphs.component';
import { DxButtonModule, DxChartModule } from 'devextreme-angular';
import { DxiSeriesModule } from 'devextreme-angular/ui/nested';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BaseUiComponent,
    WifiDataComponent,
    GraficsComponetComponent,
    GraphsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxChartModule,
    DxiSeriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

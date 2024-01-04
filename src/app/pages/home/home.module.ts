import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {AutoModule} from "../../features/auto/auto.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { GeneralQuestionsComponent } from './components/general-questions/general-questions.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDividerModule} from "@angular/material/divider";
import { TeaserCarouselComponent } from './components/teaser-carousel/teaser-carousel.component';
import {HeroComponent} from "./components/hero/hero.component";


@NgModule({
  declarations: [
    HomeComponent,
      HeroComponent,
    HowItWorksComponent,
    CalculatorComponent,
    GeneralQuestionsComponent,
    TeaserCarouselComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        AutoModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatDividerModule
    ]
})
export class HomeModule { }

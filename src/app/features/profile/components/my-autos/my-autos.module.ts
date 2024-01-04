import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyAutosComponent } from "./my-autos.component";
import { MyAutosRoutingModule } from "./my-autos-routing.module";

@NgModule({
  declarations: [MyAutosComponent],
  imports: [CommonModule, MyAutosRoutingModule],
})
export class MyAutosModule {}

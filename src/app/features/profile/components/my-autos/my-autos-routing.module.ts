import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyAutosComponent } from "./my-autos.component";

const routes: Routes = [
  {
    path: "",
    component: MyAutosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAutosRoutingModule {}

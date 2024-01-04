import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutoAddComponent } from "./auto-add.component";

const routes: Routes = [
  {
    path: "",
    component: AutoAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoAddRoutingModule {}

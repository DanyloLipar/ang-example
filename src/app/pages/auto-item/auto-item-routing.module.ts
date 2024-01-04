import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutoItemComponent } from "./auto-item.component";

const routes: Routes = [
  {
    path: "",
    component: AutoItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoItemRoutingModule {}

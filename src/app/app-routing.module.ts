import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./layouts/main/main.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { PrivateComponent } from "./layouts/private/private.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "auto-list",
        loadChildren: () =>
          import("./pages/auto-list/auto-list.module").then(
            (m) => m.AutoListModule
          ),
      },
      {
        path: "auto-item",
        loadChildren: () =>
          import("./pages/auto-item/auto-item.module").then(
            (m) => m.AutoItemModule
          ),
      },
      {
        path: "auto-add",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./pages/auto-add/auto-add.module").then(
            (m) => m.AutoAddModule
          ),
      },
    ],
  },
  {
    path: "profile",
    component: PrivateComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "personal-info", pathMatch: "full" },
      {
        path: "personal-info",
        loadChildren: () =>
          import(
            "./features/profile/components/personal-info/personal-info.module"
          ).then((m) => m.PersonalInfoModule),
      },
      {
        path: "my-autos",
        loadChildren: () =>
          import("./features/profile/components/my-autos/my-autos.module").then(
            (m) => m.MyAutosModule
          ),
      },
      {
        path: "favorite",
        loadChildren: () =>
          import("./features/profile/components/selected/selected.module").then(
            (m) => m.SelectedModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

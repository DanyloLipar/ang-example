import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutsModule } from "./layouts/layers.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SmartAuthModule } from "./smart-features/smart-auth/smart-auth.module";
import { provideEnvironmentNgxMask } from "ngx-mask";
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from "@abacritt/angularx-social-login";
import { CoreModule } from "./core/core.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "./core/token-interceptor.service";
import { AuthInterceptor } from "./core/auth-interceptor.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SmartAuthModule,
    ReactiveFormsModule,
    MatDialogModule,
    LayoutsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideEnvironmentNgxMask(),
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            // id: GoogleLoginProvider.PROVIDER_ID,
            // provider: new GoogleLoginProvider(
            // )
          },
          {
            // id: FacebookLoginProvider.PROVIDER_ID,
            // provider: new FacebookLoginProvider()
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {NgModule} from "@angular/core"
import {FormsModule} from "@angular/forms"
import {BrowserModule} from "@angular/platform-browser"

import {AppComponent} from "./app.component"
import {GeometryComponent} from "./components/geometry/geometry.component"

@NgModule({
  declarations: [
    AppComponent,
    GeometryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

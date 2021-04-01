import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ChartComponent } from "./chart/chart.component";
import { TableComponent } from "./table/table.component";
import { map } from "rxjs/operators";

@NgModule({
  declarations: [AppComponent, ChartComponent, TableComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
    //   HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //     dataEncapsulation: false,
    //   }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

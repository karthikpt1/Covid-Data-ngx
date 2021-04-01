import { Component, OnInit } from "@angular/core";
import { StockDataService } from "../covid-data.service";
import { regional } from "../graph-data-model.ts";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  constructor(private stockDataService: StockDataService) {}
  reg: regional[];

  ngOnInit(): void {
    this.stockDataService.getDynamicData().subscribe(responseData => {
      console.log(responseData.data);
      this.regional.push(responseData.data);
    });
  }
}

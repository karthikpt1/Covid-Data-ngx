import { Component, OnInit } from "@angular/core";
import { StockDataService } from "../covid-data.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  constructor(private stockDataService: StockDataService) {}
  public regional;

  ngOnInit(): void {
    this.stockDataService.getDynamicData().subscribe(responseData => {
      console.log(responseData.data);
      this.regional.push(responseData.data);
    });
  }
}

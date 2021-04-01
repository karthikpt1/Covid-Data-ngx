import { Component, OnInit } from "@angular/core";
import { StockDataService } from "../covid-data.service";
import { regional } from "../graph-data-model";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  constructor(private stockDataService: StockDataService) {}
  public reg: any = [];
  userlist: any = [];

  ngOnInit(): void {
    this.stockDataService.getDynamicData().subscribe(responseData => {
      console.log(responseData.data);
      for (let res of responseData.data.regional) {
        this.reg.push(res);
      }
    });
  }
}

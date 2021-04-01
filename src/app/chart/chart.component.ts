import { Component } from "@angular/core";
import { StockDataService } from "../covid-data.service";
import { covidData } from "../graph-data-model";
import { pie } from "../data";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent {
  single: any[];
  history: any[];
  pieData: any[];
  updatedData = [];
  updatedPieData = [];
  updatedHistoryData = [];

  view: any[] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;

  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = "State";
  showYAxisLabel = true;
  yAxisLabel = "TotalAffected";
  showDataLabel = "true";

  colorScheme = {
    domain: ["#0000FF"]
  };
  pieColourScheme = {
    domain: ["#5AA454", "#C7B42C", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  constructor(private stockDataService: StockDataService) {}

  ngOnInit() {
    this.getRegionalData();
    //   this.getHistoryData();
  }

  public getRegionalData() {
    this.stockDataService.getDynamicData().subscribe(
      responseData => {
        for (let res of responseData.data.regional) {
          this.updatedData.push({ name: res.loc, value: res.totalConfirmed });
        }
        this.single = this.updatedData;

        this.updatedPieData.push({
          name: "Infected",
          value: responseData.data.summary.total
        });
        this.updatedPieData.push({
          name: "Discharged",
          value: responseData.data.summary.discharged
        });
        this.updatedPieData.push({
          name: "Deaths",
          value: responseData.data.summary.deaths
        });

        this.pieData = this.updatedPieData;
      },
      err => {
        /* Error handling */
      }
    );
  }

  public getHistoryData() {
    this.stockDataService.getHistoryData().subscribe(
      responseData => {
        const months = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ];
        var date = new Date();
        date.setDate(date.getDate() - 1);
        let formatted_date =
          date.getFullYear() +
          "-" +
          months[date.getMonth()] +
          "-" +
          date.getDate();
        console.log(formatted_date);
        for (let res of responseData.data) {
          if (res.day === formatted_date) {
            for (let res1 of res.regional) {
              this.updatedHistoryData.push({
                name: res1.loc,
                value: res1.totalConfirmed
              });
            }
          }
        }
        console.log(this.updatedHistoryData);
        this.history = this.updatedHistoryData;
      },
      err => {
        /* Error handling */
      }
    );
  }

  //public onSelect(event: any): void {}

  public onRefresh(): void {}

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }
}

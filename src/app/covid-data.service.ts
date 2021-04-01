import { Injectable } from "@angular/core";
import { covidData } from "./graph-data-model";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StockDataService {
  //public covidData: Subject<any> = new Subject();
  private regionalURL = "https://api.rootnet.in/covid19-in/stats/regional"; // URL to web api
  private historyURL = "https://api.rootnet.in/covid19-in/stats/history"; // URL to web api

  constructor(private http: HttpClient) {}

  getDynamicData(): Observable<any> {
    let res = this.http.get<any>(this.regionalURL);
    // console.log(res);
    return res;
  }

  getHistoryData(): Observable<any> {
    let res = this.http.get<any>(this.historyURL);
    // console.log(res);
    return res;
  }
}

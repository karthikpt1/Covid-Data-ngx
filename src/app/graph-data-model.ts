export interface covidData {
  name: string;
  value: number;
}

export interface regional{
  loc: string;
  confirmedCasesIndian: number;
  confirmedCasesForeign: number;
  discharged: number;
  deaths: number;
  totalConfirmed: number;
}
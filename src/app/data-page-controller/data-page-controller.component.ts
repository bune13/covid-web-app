import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-page-controller',
  templateUrl: './data-page-controller.component.html',
  styleUrls: ['./data-page-controller.component.css']
})

export class DataPageControllerComponent implements OnInit {

  constructor(private http: HttpClient) {}

  covid_global = []
  covid_global_temp = []
  itemsSorted = []
  getTotalData_totalcases = {}
  public top6countries_totalcase = []
  public fatalityRate = []

  @ViewChild(DatatableComponent) table: DatatableComponent;

  ngOnInit() {
    this.fetchdata()
  }

  private fetchdata(){
    this.http.get('https://7z8skmdps2.execute-api.us-east-1.amazonaws.com/test/getcoviddatadyna').subscribe(posts => {
      this.covid_global = JSON.parse(posts["body"])
      this.covid_global_temp = JSON.parse(posts["body"])
      this.itemsSorted  = JSON.parse(posts["body"]).sort(function (a, b) {
        return b.cases - a.cases;
      });
      this.getTotalData_totalcases = this.itemsSorted[0]
      for(let i = 1; i < 7; i++){
        this.top6countries_totalcase.push({
          "name": this.itemsSorted[i].place,
          "value": parseInt(this.itemsSorted[i].total_cases)
        })
        this.fatalityRate.push({
          "name": this.itemsSorted[i].place,
          "value": parseInt(this.itemsSorted[i].total_deaths)
        })
      }
      this.top6countries_totalcase = [...this.top6countries_totalcase]
    })
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.covid_global_temp.filter(function(d) {
      console.log(val)
      console.log(d)
      return d.place.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.covid_global = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  view_totalcases: any[] = [340, 492];
  cardColor_totalcases: string = '#232837';
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  

}

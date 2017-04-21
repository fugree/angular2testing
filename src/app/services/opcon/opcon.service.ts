import { Injectable } from '@angular/core';
import { Http } from '@angular/http' ;
import { UpcomingManualDate } from '../../interfaces/opcon/upcomingmanualdate' ;
import 'rxjs/add/operator/map' ;


@Injectable()
export class OpconService {

  constructor(private http : Http) { }

  getUpcomingManualDates() {
      return this.http.get('http://localhost:58791/api/upcomingmanualdate/').map(response => <UpcomingManualDate[]>response.json()) ;
  }

}

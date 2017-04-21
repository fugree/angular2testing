import { Component, OnInit } from '@angular/core';
import { OpconService } from '../../../services/opcon/opcon.service' ;
import { UpcomingManualDate } from '../../../interfaces/opcon/upcomingmanualdate' ;

@Component({
  selector: 'app-upcoming-manual-date',
  templateUrl: './upcoming-manual-date.component.html',
  styleUrls: ['./upcoming-manual-date.component.css'] , 
  providers : [ OpconService ]
})
export class UpcomingManualDateComponent implements OnInit {

   private _upcomingManualDates : UpcomingManualDate[]

   private _selectedDate : Date ;

  constructor(private os : OpconService) { }

  ngOnInit() {
      this._selectedDate = new Date() ;     
      this.os.getUpcomingManualDates().subscribe(u => 
                                              { this._upcomingManualDates = u},
                                                error => console.log(error) );   
  }

}

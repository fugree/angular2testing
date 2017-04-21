import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  private _logoImage  = require('../../../../src/dxc_logo_vt_blk_rgb_150.png') ;

  constructor() {
              
   }

  ngOnInit() {      
  }

}

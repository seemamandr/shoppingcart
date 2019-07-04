import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RestapiService } from '../restapi/restapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  Items: any;
  constructor(private route: Router, private restapiService: RestapiService) { }

  ngOnInit() {
    this.doCartComp();
  }

  public doCartComp() {
    this.restapiService.doCart()
    .subscribe(res => {
      this.Items = res;
    //  this.Location = res;
    //  localStorage.setItem("city",this.Location.city);
    //  localStorage.setItem("time",this.Location.time_zone.current_time);
      console.log(res);
      // console.log(this.Items.company);
    });
  }

}

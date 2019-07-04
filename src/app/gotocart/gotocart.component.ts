import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { RestapiService } from '../restapi/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gotocart',
  templateUrl: './gotocart.component.html',
  styleUrls: ['./gotocart.component.css']
})
export class GotocartComponent implements OnInit {
  Items: any;
  items: any = 1;

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

  increaseByOne(items: any): number {

    items.quantity = items.quantity + 1;
    return items.quantity;
  }
  decreaseByOne(items: any): number {

    items.quantity = items.quantity - 1;
    return items.quantity;
}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routingcomponent',
  templateUrl: './routingcomponent.component.html',
  styleUrls: ['./routingcomponent.component.css']
})
export class RoutingcomponentComponent implements OnInit{
  ngOnInit(){
    this.route.paramMap.subscribe(value => {
      //console.log(value);
      let id = value.get('id');
      console.log(id);
    })
    
  }

  constructor(private route : ActivatedRoute)
  {

  }
}

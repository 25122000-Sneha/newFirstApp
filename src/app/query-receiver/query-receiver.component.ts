import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-receiver',
  templateUrl: './query-receiver.component.html',
  styleUrls: ['./query-receiver.component.css']
})
export class QueryReceiverComponent implements OnInit {

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value => {
      console.log(value.get('a'));
      console.log(value.get('b'));
      console.log(value.get('c'));
      console.log(value.get('d'));
    });
  }



}

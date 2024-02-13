import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-array-component',
  templateUrl: './array-component.component.html',
  styleUrls: ['./array-component.component.css']
})
export class ArrayComponentComponent implements OnInit{
  constructor(private router : Router){}
  ngOnInit(): void {
    const obsTest$ = new Observable(observer => {
      observer.next('Returned from Observable');
      observer.next('This is the Second Return From Observable');
    })
  }

  onSubmit(){
    this.router.navigate(['/form'], {queryParams: {page: 1, order: 'newest'}});
  }
  arr=[{
    moviename:"Jack Reacher",
    moviegenre:"Action",
    rating:9
  },
  {
    moviename:"Tomb Raider",
    moviegenre:"Adventure",
    rating:8
  },
  {
    moviename:"Terminator",
    moviegenre:"Sci-Fi",
    rating:10
  }];

  /*ngOnInit()
  {
    const obsTest$ = new Observable(observer => {
      console.log('printed from observable');
    }).subscribe();

    const obsTest = function(){
      console.log("Printed from Function");
    }*/

    /*ngOnInit()
  {
    const obsTest$ = new Observable(observer => {
      observer.next("Returned from Observable");
    }).subscribe(value => {
      console.log(value);
    });

    const obsTest = function(){
      return 'Return from Function';
    }

    const returnData = obsTest();
    console.log(returnData);
    

    obsTest();
  }*/

  /*ngOnInit()
  {
    const obsTest$ = new Observable(observer => {
      observer.next("Returned from Observable");
      observer.next("This is the second return from observable");
      observer.next("This is the third return from observable");
    }).subscribe(value => {
      console.log(value);
    });

    const obsTest = function(){
      return 'Return from Function';
      return 'Return 2 from Function';
    }

    const returnData = obsTest();
    console.log(returnData);
    

    obsTest();
  }*/

  /*ngOnInit()
  {
    const obsTest$ = new Observable(observer => {
      observer.next("Returned from Observable");
      observer.next("This is the second return from observable");
     

      setTimeout(() => {
        observer.next("This is from timeout func");
      }, 2000);
      observer.next("This is the third return from observable");
    }).subscribe(value => {
      console.log(value);
    });

    const obsTest = function(){
      return 'Return from Function';
      return 'Return 2 from Function';
    }

    const returnData = obsTest();
    console.log(returnData);
    

    obsTest();
  }*/

  
}

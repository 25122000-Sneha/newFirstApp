import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-array-details',
  templateUrl: './array-details.component.html',
  styleUrls: ['./array-details.component.css']
})
export class ArrayDetailsComponent {
  constructor(private route : ActivatedRoute)
  {

  }
  ngOnInit() : void {
    /*this.route.paramMap.subscribe(value => {
      /*let id=value.get('id');
      console.log(id);*/

      /*let id=value.get('id');
      const moviegenre = value.get('moviegenre');
      console.log(id);
      console.log(moviegenre);*/
      this.route.queryParamMap.subscribe(value => {
        console.log(value);
        const page= value.get('page');
        console.log(page);
        
      });
  }
}

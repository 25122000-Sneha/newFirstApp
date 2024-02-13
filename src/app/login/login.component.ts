import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  names: string[] = ["Arun", "Rajrit", "Sankha", "Nayaz", "Rita"];

  objArray : Array<Object> = [
    {
      eid: 1,
      fname: "Arun"
    },
    {
      eid: 2,
      fname: "Amit Shah"
    },
    {
      eid: 3,
      fname: "Modi ji"
    },
    {
      eid: 4,
      ename: "Rahul"
    },
    {
      eid: 5,
      fname: "Mamta Banerjee"
    }
  ]

  changeColor: boolean = false;
  title: string = "Date from Component";
  color: string = "cyan";
  imageUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4m_rmOtTR13Oyz4QKLrHlBbdCKVb2y0y1H6PBVhFFOg&s";

  onewaydata: string = "this data is going from component to html";

  //child to parent
  varcp : string = "this data goes from child to parent";

  varOcp : string = "this data goes from child to parent on click of button";

  buttonLabel: string = "";

  isActive:boolean = true;

  dcVal : number = 89.9234;

  @Output() messageEvent = new EventEmitter<string>();


  //parent to child
  @Input() varpc:any;



  buttonClick()
  {
    console.log("Button click event happened");
  }
  /*onKeyup($event: any){
    if($event.code === "Enter")
    {
      console.log($event);
    }
  }

  onKeyup2(){
    console.log("Enter key pressed");
  }*/

  /*onKeyup(name: string)
  {
    console.log("Entered value is "+name);
  }*/
  onKeyup()
  {
    console.log(this.onewaydata);
  }

  sendMessage()
  {
    this.messageEvent.emit(this.varOcp);
  }

  clickButton(buttonName: string)
  {
    this.buttonLabel = buttonName;
    console.log(this.buttonLabel);
  }
}

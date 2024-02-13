import { Component } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  form : any;
  constructor()
  {
    this.form = new FormGroup(
      {
        fullName : new FormControl('',
        [
          Validators.required,
          Validators.minLength(5)
        ]
        ),
        email: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5)
        ]
        ),
        feedback : new FormControl('', 
        [
          Validators.required,
          Validators.minLength(5)
        ]
        )
      }
    );
  }

  get fullName()
  {
    return this.form.get("fullName");
  }
  get email()
  {
    return this.form.get("email");
  }
  get feedback()
  {
    return this.form.get("feedback");
  }
}

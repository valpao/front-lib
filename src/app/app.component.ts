import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  form: FormGroup | any;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
}


  onSubmit(){
    this.submitted = true;
    console.log("login effettuato");
  }


}

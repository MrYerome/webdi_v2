import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import {DataService} from "../../Services/Dataservice";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  registerForm: FormGroup;
  submitted = false;

  public error = [];
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private Data : DataService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // Initialize Params Object
    let Params = new HttpParams();
    // Begin assigning parameters
    Params = Params.append('name', this.registerForm.value.firstName);
    Params = Params.append('email', this.registerForm.value.email);
    console.log("entrée dans tes.component.ts. Les params sont : " + Params);

    this.Data.test(Params).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );


  }

  handleResponse(data) {
    alert(data);
    //this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}

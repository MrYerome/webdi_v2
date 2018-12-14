import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

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
    Params = Params.append('firstParameter', this.registerForm.value.firstName);
    Params = Params.append('secondParameter', this.registerForm.value.email);
    console.log("entrée dans tes.component.ts. Les params sont : " + Params);

    //return this.http.post('http://localhost/appDeTest/public/api/adduserdetails'
     return this.http.post('http://localhost/webdi_v2/backend/public/api/test'
      ,{
        params: { params: Params }
      }).subscribe((res: Response) => {
      alert(res);
      //this.registerForm.reset();
    })


  }

}

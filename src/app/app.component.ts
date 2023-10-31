import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formData', {static: false}) signupForm: NgForm;
  defaultSubs = 'advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  }
  isSubmitted = false;

  onSubmit() {
    console.log(this.signupForm.value);
    this.user.email = this.signupForm.value.userData.email;
    this.user.subscription = this.signupForm.value.userData.subscription;
    this.user.password = this.signupForm.value.userData.password;
    this.signupForm.reset();
    this.isSubmitted = true;
    console.log(this.isSubmitted);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    // civility: new FormControl('Mr'),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    )]),
    active: new FormControl(true),
    isSuperAdmin: new FormControl(true),
    accountType: new FormControl('super_admin')

  })

  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
  }


  onSignUp(){

    // const registerFormData = this.getRegisterFormData()
    console.log("7777", this.registerForm.value);

    this._authService.registerAdmin(this.registerForm.value).subscribe( res => {
      console.log("register",res);

    })
  } 

  private getRegisterFormData(){
    this.registerForm.value;
    return this.registerForm.value
  }


}

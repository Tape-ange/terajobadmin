import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    )]),
    remember_me: new FormControl('true', [Validators.required])
  })
  access_tokens: any;


  constructor(
    private _authService: AuthService,
    private router: Router,
    
  ) { }



  ngOnInit(): void {
   
  }

  onSignIn() {
    const loginFormData = this.getLoginFormData()
    console.log('onsignIn login', loginFormData);
    
    this._authService.signUp(loginFormData).subscribe(res => {
      console.log("resdata",res);
      // localStorage.setItem('user', res.data.access_token);

      this.access_tokens = res
      localStorage.setItem('accesToken', this.access_tokens.data.access_token);
      localStorage.setItem('refreshToke', this.access_tokens.data.refresh_token);
      console.log("localStorage",localStorage.getItem('accesToken'));
      console.log("localStorage2",localStorage.getItem('refreshToke'));

      
      // decoder le token
      const token = this.access_tokens.data.access_token;
    const decodedToken = JSON.parse(window.atob(token.split('.')[1]));
    console.log("token",token);
      this.router.navigateByUrl('/admin/dashboard')

    })
   
    
  }

  private getLoginFormData() {
   return this.loginForm.value;

  }

}

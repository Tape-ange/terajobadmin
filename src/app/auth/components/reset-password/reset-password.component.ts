import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm = new FormGroup({

  })


  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
  }


  onResetPassword(){
    const resetPasswordFormData = this.getResetPasswordFormData()
    this._authService.resetPassword(resetPasswordFormData).subscribe( (res: any) => {
      console.log(res);

    })
  }

  private getResetPasswordFormData(){
    this.resetPasswordForm.value;
  }


}

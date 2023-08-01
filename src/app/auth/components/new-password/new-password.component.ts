import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {


  newPasswordForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    )]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    )]),
  })
  errMsg: any;


  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  onNewPassword() {
    const newPasswordFormData = this.getNewPasswordFormData().get

    this._authService.newPassword(newPasswordFormData).subscribe(res => {
      console.log(res);

    })
  }

  private getNewPasswordFormData() {
    const newPass = this.newPasswordForm.get('newPassword')?.value;
    const confirmPass = this.newPasswordForm.get('confirm')?.value
    if (newPass === confirmPass) {
      return this.newPasswordForm.get('newPassword')?.value;
    } else {
      this.errMsg = 'Error'
    }
  }


}

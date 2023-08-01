import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommercialBoService } from 'src/app/admin/services/commercial-bo/commercial-bo.service';

@Component({
  selector: 'app-register-commercial-bo',
  templateUrl: './register-commercial-bo.component.html',
  styleUrls: ['./register-commercial-bo.component.scss'],
})
export class RegisterCommercialBoComponent implements OnInit {
  registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    civility: new FormControl('', [Validators.required]),
    accountType: new FormControl('commercial'),
    active: new FormControl(true),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    isCommercial: new FormControl(true)
  });

  ngOnInit(): void {}

  constructor(
    private commercialBo: CommercialBoService,
    private toastr: ToastrService,
    private router : Router
    ) {}

  createCommercialBo() {
    console.log('form',this.registerForm.value);


    this.commercialBo.loginCommercialBo((this.registerForm.value)).subscribe(
      (res) => {
        this.showSuccess('Enregistrement réussi')
        this.router.navigateByUrl('admin/backOffice/listCommercialBo')
        console.log('res',res);

      },
      (error) => {

        console.log('erreur',error);

      }
    );
  }

  showSuccess(data = '') {
    this.toastr.success(data);
}

showError(data = '', title: string) {
    this.toastr.error(data, title);
}
}

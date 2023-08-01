import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { EmailVerifyService } from 'src/app/admin/services/emailVerify/email-verify.service';
import { NumVerifyService } from 'src/app/admin/services/numVerify/num-verify.service';
import { SiretVerifyService } from 'src/app/admin/services/siret/siret-verify.service';
import { UsersService } from 'src/app/admin/services/users/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  

  // Private
  private _unsubscribeAll: Subject<any>;
  // warningTextSiret: string | undefined;
     isLoading: boolean | any;
  // warningTextNumber: string | any;
  // warningTextEmail: string | any;
  //emailPatern = '^[a-z0-9._%+-]+@(?!hotmail|gmail|googlemail|yahoo|gmx|ymail|outlook|bluewin|protonmail|t-online|web.|online.|aol.|live)([a-z0-9.-])+\\.[a-z]{2,4}$';


//   dates = {
//     date: Date(),
    
// };
dates = Date()
  registerPartnerForm = new FormGroup({
    companyName: new  FormControl('', [Validators.required]),
    legalForm:  new  FormControl('', [Validators.required]),
    siret:  new  FormControl('', [Validators.required]),
    phone: new  FormControl('', [Validators.required]),
    accountStatus: new  FormControl('', [Validators.required]),
    civility: new  FormControl('', [Validators.required]),
    lastname:  new  FormControl('', [Validators.required]),
    firstname:  new  FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',  [Validators.required]),
    accountType: new FormControl('partner') , 
    subscriptionType: new FormControl('', Validators.required),
    termsCGU: new FormControl(true),
    termsCGV: new FormControl(true),
    language: new FormControl("fr"),
    status: new FormControl(0),
    createdDate: new FormControl(this.dates),
    updatedDate: new FormControl(this.dates)
  });


  constructor(
   // private _formBuilder: FormBuilder,
    private _siret: SiretVerifyService,
    private _numVerifyService: NumVerifyService,
    private _emailVerifyService: EmailVerifyService,
    private toast: ToastrService,
    private _users: UsersService,
    private _route: Router
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }
 



  ngOnInit(): void {

   

  }


  // verify siret
  // blurSiret(): void {
  //   this.warningTextSiret = '';
  //   const siret = this.registerPartnerForm.get('siretPartner').value;
  //   console.log("siret", siret);
    
  //   this._siret.checkSiret(siret).subscribe(
  //     (res) => {
  //       console.log('res siret', res);
  //     },
  //     (err) => {
  //       console.log('siret error', err);
  //       this.registerPartnerForm.controls['siretPartner'].setErrors({ 'incorrect': true });
  //       switch (err.status) {
  //         case 301: {
  //           this.warningTextSiret = err.error.header.message;
  //           this.isLoading = false;
  //           break;
  //         }
  //         case 400: {
  //           this.warningTextSiret = err.error.header.message;
  //           this.isLoading = false;
  //           break;
  //         }
  //         case 404: {
  //           this.warningTextSiret = err.error.header.message;
  //           this.isLoading = false;
  //           break;
  //         }
  //         case 500: {
  //           this.warningTextSiret = err.error.header.message;
  //           this.isLoading = false;
  //           break;
  //         }
  //         case 503: {
  //           this.warningTextSiret = err.error.header.message;
  //           this.isLoading = false;
  //           break;
  //         }
  //         default: {
  //           this.warningTextSiret = err.error.header.message;
  //           this.isLoading = false;
  //           break;
  //         }
  //       }
  //     }
  //   );
  // }

  // verify phone 

  // blurPhone(): void {
  //   this.warningTextNumber = '';
  //   const phone = this.registerPartnerForm.get('phonePartner').value;
  //   this._numVerifyService.checkPhone(phone).subscribe(
  //     (res) => {
  //       console.log('blor phone res', res);
  //       if (res.valid === false) {
  //         this.warningTextNumber = 'Numéro invalid';
  //         this.registerPartnerForm.controls['phonePartner'].setErrors({ 'incorrect': true });
  //       }
  //     },
  //     (err) => {
  //       console.log('blor phone', err);
  //       switch (err.status) {
  //         case 500: {    // forbidden
  //           this.warningTextNumber = 'Numéro invalide';
  //           this.registerPartnerForm.controls['phonePartner'].setErrors({ 'incorrect': true });
  //           break;
  //         }
  //         case 401: {
  //           this.warningTextNumber = 'Numéro invalide';
  //           this.registerPartnerForm.controls['phonePartner'].setErrors({ 'incorrect': true });
  //           break;
  //         }
  //         default: {
  //           this.warningTextNumber = 'Numéro invalide';
  //           this.registerPartnerForm.controls['phonePartner'].setErrors({ 'incorrect': true });
  //           break;
  //         }
  //       }

  //     }
  //   );
  // }

  // verify email
  // blurEmail(): void {
  //   this.warningTextEmail = '';
  //   // const email = this.registerPartnerForm.get('emailPartner').value;

  //   if (!this.registerPartnerForm.controls['emailPartner'].invalid) {
  //     const email = this.registerPartnerForm.get('emailPartner').value;
  //     console.log("email blurEmail ", email);
      
  //     this._emailVerifyService.checkEmail(email).subscribe(
  //       (res) => {
  //         console.log('blurEmail res', res);
  //         switch (res.status) {
  //           case 200: {
  //             this.warningTextEmail = '';
  //             this.isLoading = false;
  //             break;
  //           }
  //           case 500: {    // forbidden
  //             this.showError('Désolé! Nous avons rencontrés une erreur, veuillez vérifier votre connexion internet', res.statusText);
  //             // this.warningTextEmail= "Désolé! Nous avons rencontrés une erreur"
  //             this.registerPartnerForm.controls['emailPartner'].setErrors({ 'incorrect': true });

  //             this.isLoading = false;
  //             break;
  //           }
  //           case 401: {
  //             this.warningTextEmail = 'Veuillez entrez un email entreprise';
  //             this.registerPartnerForm.controls['emailPartner'].setErrors({ 'incorrect': true });
  //             break;
  //           }
  //           default: {
  //             this.warningTextEmail = 'Veuillez entrez un email d\'entreprise valid';
  //             this.registerPartnerForm.controls['emailPartner'].setErrors({ 'incorrect': true });
  //             break;
  //           }
  //         }
  //       },
  //       (err) => {
  //         console.log('blurEmail', err);
  //         switch (err.status) {
  //           case 500: {    // forbidden
  //             this.showError('Désolé! Nous avons rencontrés une erreur, veuillez vérifier votre connexion internet', err.statusText);
  //             // this.warningTextEmail= "Désolé! Nous avons rencontrés une erreur"
  //             this.registerPartnerForm.controls['emailPartner'].setErrors({ 'incorrect': true });
  //             this.isLoading = false;
  //             break;
  //           }
  //           case 401: {
  //             this.warningTextEmail = 'Veuillez entrez un email entreprise';
  //             this.registerPartnerForm.controls['emailPartner'].setErrors({ 'incorrect': true });
  //             break;
  //           }
  //           // default: {
  //           //   this.warningTextEmail = 'Veuillez entrez un email d\'entreprise valid';
  //           //   this.registerPartnerForm.controls['emailPartner'].setErrors({ 'incorrect': true });
  //           //   break;
  //           // }

  //         }
  //       }
  //     );
  //   }
   


  // }

  registerPartner(): void {
    if (this.registerPartnerForm.valid) {
        this.isLoading = true;
        let partner = this.registerPartnerForm.getRawValue();
       
        console.log('partenaire register', JSON.stringify(partner));
        console.log('partenaire register', this.registerPartnerForm.value);
        this._users.registerPartner(partner).subscribe(
            (response) => {
              console.log("reponse registerPartner", response);
                // this.isLoading = false;
               //this.showSuccess('Création faite avec succès')
               // alert apres validation
               Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Création faite avec succès',
                showConfirmButton: false,
                timer: 1500
              })
              this._route.navigateByUrl('/admin/dashboard')
            },
            (error) => {
                console.log(error);
                switch (error.status) {
                    case 401: { // login
                        this.showError('Désolé! Votre session est expirée, veuillez vous reconnecter!', error.statusText);
                       
                        this.isLoading = false;
                        break;
                    }
                    case 404: {     // forbidden
                        this.showError('Désolé! La page demandée est introuvable, veuillez réesayer plus tard', error.statusText);
                      
                        this.isLoading = false;
                        break;
                    }
                    case 500: {    // forbidden
                        this.showError('Désolé! Nous avons rencontrés une erreur, veuillez vérifier votre connexion internet', error.statusText);
                        this.isLoading = false;
                        break;
                    }
                    default: {
                        this.showError('Désolé! Nous avons rencontrés une erreur, nous allons rafraichir la page', error.statusText);
                        this.isLoading = false;
                        window.location.reload();
                    }
                }
            }

        );
    }
}


   /*
      *Alertes
      */

    // Success

    showSuccess(data : string) {
      this.toast.success(data);
  }

  // Error

  showError(data: string, title: string) {
      this.toast.error(data);
  }

}







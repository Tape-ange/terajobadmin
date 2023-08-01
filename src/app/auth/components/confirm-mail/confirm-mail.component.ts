import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirm-mail',
  templateUrl: './confirm-mail.component.html',
  styleUrls: ['./confirm-mail.component.scss']
})
export class ConfirmMailComponent implements OnInit {
  public readonly LOGIN_PATH = '/auth/login';
  id: any;
  constructor( 
     private _authService: AuthService,
    private routes: Router,
    private _route: ActivatedRoute,
    ) { 
      _route.params.subscribe((res) => {
        let infos = res
        // this.id = res.id;
        this.id = infos['id'];
    });
    }

  ngOnInit(): void {
  }

  verifyMail() {
    console.log('iddd', this.id);

    this._authService.confirmMail({ registrationToken: this.id }).subscribe(
        (res) => {
            console.log('reussir',res);
            this.routes.navigateByUrl(this.LOGIN_PATH);
        },
        (err) => {
            console.log('echec', err);
           
        }
    );
}
}

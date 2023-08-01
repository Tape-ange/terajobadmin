import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {


  }

}

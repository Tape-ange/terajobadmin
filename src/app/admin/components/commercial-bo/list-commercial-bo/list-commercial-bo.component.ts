import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommercialBoService } from 'src/app/admin/services/commercial-bo/commercial-bo.service';
import { UsersService } from 'src/app/admin/services/users/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-commercial-bo',
  templateUrl: './list-commercial-bo.component.html',
  styleUrls: ['./list-commercial-bo.component.scss'],
})
export class ListCommercialBoComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort : MatSort | any;

  public dataSource = new MatTableDataSource<any>();
  users = [];
  displayedColumns: string[] = [
    'nom',
    'prenom',
    'telephone',
    'email',
    'type de compte',
    'Statut',
    'action',
  ];
  reponse: any;



  constructor(
    private commercialBOService: CommercialBoService,
    private _userService : UsersService
    ) {}

  ngOnInit(): void {
    this.listCommercialBo();

  }

  // liste des commercial BO

  listCommercialBo() {
    this.commercialBOService.commercialBoList().subscribe((res) => {
      console.log('liste commercial bo', res);
      this.users = res.data;
      this.dataSource = new MatTableDataSource<any>(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  // dialogue pour bloquer un user
  dialogToBlock(data: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success   ',
        cancelButton: 'btn btn-danger  ',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: ' Êtes-vous sûr?',
        text: 'De vouloir bloquer cet utulisateur',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Bloquer',
        cancelButtonText: 'Annuler',
        // reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const userId = {
            keycloakId: data,
          };
          console.log('onUserArchived', userId);
          this._userService.archiveUser(userId).subscribe(
            (res) => {
              console.log(res);
              swalWithBootstrapButtons.fire(
                'Bloquer',
                "L'utulisateur a bien été bloqué",
                'success'
              );
              this.listCommercialBo();
            },
            (err) => {
              console.log('errrrr', err);
              swalWithBootstrapButtons.fire(
                'Erreur',
                "L'utulisateur n'a pas été bloquer",
                'error'
              );
            }
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Annuler',
            "L'utulisateur n'a pas été bloqué",
            'error'
          );
        }
      });
  }



  // dialogue pour debloquer un user
  dialogToUnblock(data: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ',
        cancelButton: 'btn btn-danger  ',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Êtes-vous sûr?',
        text: 'De vouloir débloquer cet utulisateur!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Débloquer',
        cancelButtonText: 'Annuler',
        // reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log('p_load', data);
          const datas = {
            keycloakId: data,
          };
          console.log('userid', data);
          this._userService.unArchhivedUsers(datas).subscribe(
            (res) => {
              console.log('userUnArchived', res);
              this.reponse = res;
              swalWithBootstrapButtons.fire(
                'Débloquer!',
                "L'utulisateur a bien été débloquer",
                'success'
              );
              this.listCommercialBo();
            },
            (err) => {
              console.log('errrrr', err);
              swalWithBootstrapButtons.fire(
                'Erreur',
                "L'utulisateur n'a pas été débloquer",
                'error'
              );
            }
          );
        } else if ( result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Annuler',
            "L'utulisateur n'a pas été débloquer",
            'error'
          );
        }
      });
  }



}

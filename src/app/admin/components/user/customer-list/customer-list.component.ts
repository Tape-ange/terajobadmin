import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/admin/services/users/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  public dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | any;
  @ViewChild(MatSort, { static: false }) sort: MatSort | any;

  users = [];
  customerList = [];
  block = [];
  unblock = [];
  displayedColumns: any[] = [
    'Entreprise',
    'nom',
    'prenom',
    'email',
    'Type de compte',
    'statut',
    'action',
  ];
  selected: any;
  reponse: any;
  errorRponse: any;
  lengthUser: any | undefined;

  constructor(
    private _userService: UsersService,
    private paginators: MatPaginatorIntl
  ) {
    paginators.itemsPerPageLabel = 'Elément par page';
  }

  ngOnInit(): void {
    this.onCustomerList();
  }

  onCustomerList() {
    this._userService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res.data;

      //filtre
      this.customerList = this.users.filter((rescustomer: any) => {
        return rescustomer.accountType === 'customer';
      });

      this.dataSource = new MatTableDataSource<any>(this.customerList);
      this.ngAfterViewInit();
    });
  }

  //liste des customer bloqués
  customerBlock() {
    this.block = this.customerList.filter((rescustomer: any) => {
      return rescustomer.blocked === true;
    });
    this.dataSource = new MatTableDataSource<any>(this.block);
    this.ngAfterViewInit();
  }

  //liste des customer débloqués
  customerunBlock() {
    this.unblock = this.customerList.filter((rescustomer: any) => {
      return rescustomer.blocked === false;
    });
    this.dataSource = new MatTableDataSource<any>(this.unblock);
    this.ngAfterViewInit();
  }

  //pagination
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
              this.onCustomerList();
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
              this.onCustomerList();
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
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Annuler',
            "L'utulisateur n'a pas été débloquer",
            'error'
          );
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

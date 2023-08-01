import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TendersService } from 'src/app/admin/services/tenders/tenders.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  filterText: string = '' ;

  displayedColumns: string[] = [
    'Entreprise',
    'Localisation',
    'Date de creation',
    'Date debut',
    'Date fin',
    'TJM',
    'Statut',
    'action',
  ];
  tenders = [];
  tendersBlocked = [];
  allTender = [];
  tenderListActive: any;
  filterValue: any;



  constructor(
    private _tenderService: TendersService,
    private paginators: MatPaginatorIntl
  ) {
    paginators.itemsPerPageLabel = 'Elément par page';
  }

  ngOnInit(): void {

     this.onAllTenders();
    // this.tenderListBlocked();

  }
  // liste de tous les tenders actifs

  tenderActiveList(){
    this._tenderService.tenderActiveList().subscribe((res) => {
      console.log(res);
      this.tenderListActive = res.data;
    } )
  }


  // liste de tous les tenders

  onAllTenders() {
    this._tenderService.allTender().subscribe((res) => {

      this.tenders = res.data;
      console.log("this.tenders",this.tenders);
      this.dataSource = new MatTableDataSource<any>(this.tenders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      //
      this.dataSource.filterPredicate = (dataa: any, filter:string) => {
        return dataa?.company?.companyName.toLowerCase().includes(filter) ||
        dataa.localisation.toLowerCase().includes(filter) ||
        dataa.createdDate.toLowerCase().includes(filter)  ||
        dataa.endDate.toLowerCase().includes(filter) ||
        dataa.payAmount.toString().toLowerCase().includes(filter)
      }

    });
  }
  // liste tender bloqué
  tenderListBlocked() {
    this._tenderService.tenderBlockList().subscribe((res) => {
      console.log(res);
      this.tendersBlocked = res.data;
    });
  }



  // bloquer un tender
  // onTenderArchived(data: string) {
  //   console.log('onTenderArchived data', data);

  //   const tender = {
  //     tenderId: data,
  //   };
  //   console.log('onTenderArchived tenderId', tender);
  //   this._tenderService.archiveTenders(tender).subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  // debloquer un tender
  // tenderUnarchived(p_load: number) {
  //   console.log('tenderUnarchived paylod', p_load);
  //   const tender = {
  //     tenderId: p_load,
  //   };
  //   console.log('tenderUnarchived tender', tender);
  //   this._tenderService.unArchiveTenders(tender).subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  // bloquer un tender
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
        text: "De vouloir bloquer cet appel d'offre",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Bloquer',
        cancelButtonText: 'Annuler',
        // reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const tender = {
            tenderId: data,
          };
          console.log('onUserArchived', tender);
          this._tenderService.archiveTenders(tender).subscribe(
            (res) => {
              console.log(res);
              swalWithBootstrapButtons.fire(
                'Bloquer',
                "L'appel d'offre a bien été bloqué",
                'success'
              );
              this.onAllTenders();
            },
            (err) => {
              console.log('errrrr', err);
              swalWithBootstrapButtons.fire(
                'Erreur',
                "L'appel d'offre n'a pas été bloquer",
                'error'
              );
            }
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Annuler',
            "L'appel d'offre n'a pas été bloqué",
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
        text: "De vouloir débloquer cet appel d'offre!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Débloquer',
        cancelButtonText: 'Annuler',
        // reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log('p_load', data);
          const tender = {
            tenderId: data,
          };
          console.log('userid', data);
          this._tenderService.unArchiveTenders(tender).subscribe(
            (res) => {
              console.log('userUnArchived', res);

              swalWithBootstrapButtons.fire(
                'Débloqué',
                "L'appel d'offre a été débloqué",
                'success'
              );
              this.onAllTenders();
            },
            (err) => {
              console.log('errrrr', err);
              swalWithBootstrapButtons.fire(
                'Erreur',
                "L'appel d'offre n'a pas été débloqué",
                'error'
              );
            }
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Erreur',
            "L'appel d'offre n'a pas été débloqué",
            'error'
          );
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


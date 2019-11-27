import { Component, OnInit, NgModule } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { AssessmentListData } from '../../../@core/data/assessment-list';
import { CustomRenderComponent } from './../custom-render.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.scss'],
})
export class AssessmentListComponent implements OnInit {

  public data: any;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      risk: {
        title: 'Risk',
        type: 'string',
      },
      status: {
        title: 'Assessment Progress',
        type: 'custom',
        renderComponent: CustomRenderComponent,
      },
      lastUpdated: {
        title: 'Assesment Updated',
        type: 'date',
      },
    },
    actions: {
      position: 'right',
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: AssessmentListData, private route: ActivatedRoute, private router: Router) {
    this.data = this.service.getData();
  }

  ngOnInit() {
    const dataSource = this.data.filter(a => a.companyId === parseInt(this.route.snapshot.params.id, 10));
    dataSource.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
    this.source.load(dataSource);
  }

  onDeleteConfirm(event: { confirm: { resolve: () => void; reject: () => void; }; }): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onUserRowSelect(event: { data: { index: any, status: any }; }): void {
    // tslint:disable-next-line: no-console
    console.log(event.data.index);
    // tslint:disable-next-line: no-console
    console.log(this.data);
    // tslint:disable-next-line: max-line-length
    if (event.data.status < 100) {
      this.router.navigateByUrl('/pages/assessment');
    } else {
      // tslint:disable-next-line: max-line-length
      this.router.navigateByUrl('/pages/companies/' + parseInt(this.route.snapshot.params.id, 10) + '/assessment/' + event.data.index);
    }
  }
}

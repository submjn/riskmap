import { Component, OnInit, NgModule } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { CompaniesData } from '../../@core/data/companies';
import { CustomRenderComponent } from './custom-render.component';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})

export class CompaniesComponent {

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
      isActive: {
        title: 'Active',
        type: 'Boolean',
      },
      company: {
        title: 'Company Name',
        type: 'string',
      },
      risk: {
        title: 'Company Risk',
        type: 'string',
      },
      status: {
        title: 'Current Assessment Progress',
        type: 'custom',
        renderComponent: CustomRenderComponent,
      },
      quantity: {
        title: '# of Assessments',
        type: 'number',
      },
      lastUpdated: {
        title: 'Last Assesment Updated',
        type: 'date',
      },
    },
    actions: {
      position: 'right',
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CompaniesData, private router: Router) {
    const dataSource = this.service.getData();
    this.source.load(dataSource.sort((a, b) => a.company.localeCompare(b.company)));
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onUserRowSelect(event): void {
    this.router.navigate(['/pages/companies', event.data.index]);
  }
}

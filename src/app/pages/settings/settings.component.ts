import { Component, TemplateRef, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private dialogService: NbDialogService) {
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }

  ngOnInit() {
    // this.dialogService.open();
  }

}

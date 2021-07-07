import { Component, OnInit } from '@angular/core';
import { RecordStatusService } from '../service/recordstatus.service';
import { RecordStatus } from '../model/recordstatus';

@Component({
  selector: 'app-recordstatus-list',
  templateUrl: './recordstatus-list.component.html',
  styleUrls: ['./recordstatus-list.component.css']
})
export class RecordStatusListComponent implements OnInit {

  recordStatuses: RecordStatus[];

  constructor(private RecordStatusService: RecordStatusService) {
  }

  ngOnInit() {
    this.RecordStatusService.findAll().subscribe(data => {
      this.recordStatuses = data;
    });
  }

}

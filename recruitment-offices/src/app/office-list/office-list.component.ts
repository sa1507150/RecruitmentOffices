import { Component, OnInit } from '@angular/core';
import { Office } from '../model/office';
import { OfficeServiceService } from '../service/office-service.service';
import {Router} from "@angular/router";
import {Submission} from "../model/submission";
import {SubmissionService} from "../service/submission.service";

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {

  offices: Office[];
  submissions: Submission[];

  constructor(private officeServiceService: OfficeServiceService, private submissionsService: SubmissionService, private router: Router) {
  }

  ngOnInit() {
    this.officeServiceService.findAll().subscribe(data => {
      this.offices = data;
    });
  }

  showOfficeSubmissions(labourLicenseNo: string) {
    this.router.navigate(['submissions', labourLicenseNo]);
  }
}

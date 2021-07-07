import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../service/submission.service';
import { Submission } from '../model/submission';
import {Router} from "@angular/router";

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  submissions: Submission[];

  constructor(private submissionService: SubmissionService, private router: Router) {
  }

  ngOnInit() {
    this.submissionService.findAll().subscribe(data => {
      this.submissions = data;
    });
  }

  showSubmissionRecords(id: string) {
    this.router.navigate(['records', id]);
  }

}

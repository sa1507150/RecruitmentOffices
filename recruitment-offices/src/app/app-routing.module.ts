import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficeListComponent } from './office-list/office-list.component';
import { OfficeFormComponent } from './office-form/office-form.component';
import {RecordListComponent} from "./record-list/record-list.component";
import {RecordStatusListComponent} from "./recordstatus-list/recordstatus-list.component";
import {SubmissionListComponent} from "./submission-list/submission-list.component";
import {FileListComponent} from "./file-list/file-list.component";
import {UploadFilesComponent} from "./upload-files/upload-files.component";
import {OfficeSubmissionsComponent} from "./office-submissions/office-submissions.component";
import {RecordRecordStatusComponent} from "./record-record-status/record-record-status.component";
import {AdlsaUserComponent} from "./adlsa-user/adlsa-user.component";
import {RecruitmentUserComponent} from "./recruitment-user/recruitment-user.component";
import {RecruitmentComponent} from "./recruitment/recruitment.component";
import {AdlsaComponent} from "./adlsa/adlsa.component";
import {SubmissionRecordComponent} from "./submission-record/submission-record.component";


const routes: Routes = [
  { path: 'recruitment', component: RecruitmentComponent},
  { path: 'adlsa', component: AdlsaComponent},
  { path: 'offices', component: OfficeListComponent },
  { path: 'addOffice', component: OfficeFormComponent },
  { path: 'records', component: RecordListComponent},
  { path: 'recordStatuses', component: RecordStatusListComponent},
  { path: 'recordStatuses/:serialNo', component: RecordRecordStatusComponent},
  { path: 'submissions', component: SubmissionListComponent},
  { path: 'files', component: FileListComponent},
  { path: 'upload', component: UploadFilesComponent },
  { path: 'submissions/:labourLicenseNo', component: OfficeSubmissionsComponent},
  { path: 'adlsaUsers', component: AdlsaUserComponent},
  { path: 'recruitmentUsers', component: RecruitmentUserComponent},
  { path: 'records/:id', component: SubmissionRecordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

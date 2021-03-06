import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { OfficeListComponent } from './office-list/office-list.component';
import { OfficeFormComponent } from './office-form/office-form.component';
import { OfficeServiceService } from './service/office-service.service';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordService } from './service/record.service';
import { RecordStatusListComponent } from './recordstatus-list/recordstatus-list.component';
import { RecordStatusService } from './service/recordstatus.service';
import { SubmissionListComponent } from './submission-list/submission-list.component';
import { SubmissionService } from './service/submission.service';
import { FileListComponent } from './file-list/file-list.component';
import { FileService } from './service/file.service';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { UploadFileService } from './service/upload-file.service';
import { OfficeSubmissionsComponent } from './office-submissions/office-submissions.component';
import { OfficeSubmissionService } from './service/office-submission.service';
import { RecordRecordStatusComponent } from './record-record-status/record-record-status.component';
import { RecordRecordStatusService } from './service/record-record-status.service';
import {HttpClientModule} from "@angular/common/http";
import { RecruitmentUserComponent } from './recruitment-user/recruitment-user.component';
import { AdlsaUserComponent } from './adlsa-user/adlsa-user.component';
import {RecruitmentUserService} from "./service/recruitment-user.service";
import {AdlsaUserService} from "./service/adlsa-user.service";
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { AdlsaComponent } from './adlsa/adlsa.component';
import { SubmissionRecordComponent } from './submission-record/submission-record.component';
import {SubmissionRecordService} from "./service/submission-record.service";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {AuthService} from "./service/auth.service";
import {AuthInterceptor, authInterceptorProviders} from "./helper/auth.interceptor";
import {UserService} from "./service/user.service";
import {TokenStorageService} from "./service/token-storage.service";


@NgModule({
  declarations: [
    AppComponent,
    OfficeListComponent,
    OfficeFormComponent,
    RecordListComponent,
    RecordStatusListComponent,
    SubmissionListComponent,
    FileListComponent,
    UploadFilesComponent,
    OfficeSubmissionsComponent,
    RecordRecordStatusComponent,
    RecruitmentUserComponent,
    AdlsaUserComponent,
    RecruitmentComponent,
    AdlsaComponent,
    SubmissionRecordComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [OfficeServiceService, RecordService, RecordStatusService, SubmissionService, FileService, UploadFileService, OfficeSubmissionService, RecordRecordStatusService, RecruitmentUserService, AdlsaUserService, SubmissionRecordService, AuthService, AuthInterceptor, UserService, TokenStorageService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeServiceService } from '../service/office-service.service';
import { Office } from '../model/office';

@Component({
  selector: 'app-office-form',
  templateUrl: './office-form.component.html',
  styleUrls: ['./office-form.component.css']
})
export class OfficeFormComponent {

  office: Office;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private officeServiceService: OfficeServiceService) {
    this.office = new Office();
  }

  onSubmit() {
    this.officeServiceService.save(this.office).subscribe(result => this.gotoOfficeList());
  }

  gotoOfficeList() {
    this.router.navigate(['/offices']);
  }

}

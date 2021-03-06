import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JobApplication } from 'src/app/core/jobapplications/classes/jobapplication';
import { JobapplicationService } from 'src/app/core/jobapplications/jobapplication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jobapplication-detail',
  templateUrl: './jobapplication-detail.component.html',
  styleUrls: ['./jobapplication-detail.component.css']
})
export class JobapplicationDetailComponent implements OnInit {
  jobapplication$: Observable<JobApplication>;
  showDialog: boolean;

  constructor(
    private jobapplicationservice: JobapplicationService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getJobApplication();
  }

  getJobApplication(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.jobapplication$ = this.jobapplicationservice.getById(id);
    console.log(this.jobapplication$);
  }

  getDocument(event, docName){
    event.preventDefault();
    console.log(event.target.href);
    this.jobapplicationservice.getDocument(event.target.href, docName);
  }

  goBack(): void{
    this.router.navigate(['/jobapplications'])
  } 
}

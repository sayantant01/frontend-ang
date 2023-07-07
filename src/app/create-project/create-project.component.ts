import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  data: any;
  errorMessage:any;
  projectdetails:any;
  status:boolean=false;
  project = {
    title: '',
    budget: 0,
    startDate: '',
    expectedEndDate: '',
    clientId:0
  };
  clients:any = [];

  constructor(private http: HttpClient) { 

    this.http.get('http://localhost:8080/api/clients').subscribe(data => {
  console.log(data);
  this.clients = data as any[];
  
});
  }

  ngOnInit(): void {
  }

  

  onSubmit() {
    console.log('Form submitted');

    this.http.post('http://localhost:8080/api/projects/new',this.project).subscribe(responseData => {
  console.log(responseData);
  this.status = true;
  alert("Project Created Successfully");
  this.projectdetails = responseData;
  console.log(this.project);
},(error) => {
  console.error(error);
  this.errorMessage = error.message;
});
  }
}
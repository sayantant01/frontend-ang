import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-resource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css'],
  providers: [NgForm]
})
export class AddresourceComponent {
  resource = {
    projectId: 0,
  firstName:'',
  lastName:'',
  email:'',
  phoneNumber:'',
  role:''
  };
  projects :any= [];
  submitted = false;
  resourceId = '';
  errorMessage:any;
  resourceDetails:any;


  constructor(private http: HttpClient) { 

    this.http.get('http://localhost:8080/api/projects').subscribe(data => {
  console.log(data);
  this.projects = data as any[];
  
});

  
  }

  onSubmit() {
    this.http.post('http://localhost:8080/api/projects/addresource',this.resource).subscribe(responseData => {
      console.log(responseData);
      this.resourceDetails = responseData;
      
    },(error) => {
      console.error(error);
      this.errorMessage = error.message;
    });

  } 

}
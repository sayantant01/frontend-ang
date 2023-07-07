import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects:any = [];
  status:string = '';

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/api/projects').subscribe(data => {

      console.log(data);
      this.projects = data as any[];
      
    });

    

    

            
  }

  updateProject(projectcode:number){
    this.http.put('http://localhost:8080/api/projects/'+projectcode+'/update',this.status).subscribe(data => {

      console.log(data);
      
    });

  }

  checkStatus(projectstatus:string):boolean{
    if(projectstatus == 'Completed'|| projectstatus == 'Canceled'){
      return false;
    }
    else{
      return true;
    }
  }

}

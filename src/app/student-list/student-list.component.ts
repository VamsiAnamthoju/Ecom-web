import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

   students = [
     {"id": 1, "name": "Ram", "lastname":"Thripuram",   "Course": "Python"},
     {"id": 2, "name": "Vamsi", "lastname":"Ananthoju", "Course": "Angular"},
     {"id": 3, "name": "Ganesh", "lastname":"Biru",     "Course": "Dotnet"},
     {"id": 4, "name": "Mohan", "lastname":"Kolipaka",  "Course": "React Js"},
     {"id": 5, "name": "Navaz", "lastname":"Ahmed",     "Course": "Java"},
  ];
  showcontent = false;


   studentlistitem = [
      {"id": 1, "name": "Vamsi", "Email":"vamsi301b@gmail.com"},
      {"id": 2, "name": "Ram",   "Email":"thripuram.ram03@gmail.com"},
      {"id": 3, "name": "Mohan", "Email":"mohankolipaka123@gmail.com"},
      {"id": 4, "name": "Navaz", "Email":"navazahmed917@gmail.com"},
      {"id": 5, "name": "Pavan", "Email":"pavankumar1122@gmail.com"},
    
  ];

 
  constructor() { }

  

  ngOnInit(): void {
  }
}

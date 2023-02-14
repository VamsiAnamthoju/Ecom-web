import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  userName : string = 'hello' ;
 

  constructor() {}

  ngOnInit(): void { }  // We callling the (method or Function)-this.Prime()
  
  onuseradded() { }
    // getting error when we write this one --- this.usersList.push(this.userName);
}

/* import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  userName : string = '';
  usersList = [ ];

  numberlist : Array<number>=[];

  constructor() {}

  ngOnInit(): void {
    this.prime();
  }
  prime(){
    var number = 20;
    var isPrime;
    for (let i=2; i<=20; i++){
      isPrime =1;
      for(let j=2; j<i; j++){
        if(i%j ===0){
          isPrime =0;
          break;
        }
        }
         if(isPrime == 1){
         this.numberlist.push(i);   
      }
    }
  }
  onuseradded() {
    // getting error when we write this one --- this.usersList.push(this.userName);
  }
}    */
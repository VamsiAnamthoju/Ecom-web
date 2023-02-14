  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    users =[
      {id: 1, username: 'Person1'},
      {id: 2, username: 'Person2'},
      {id: 3, username: 'Person3'},
      ];
    title = 'Ecom-web';
    studentDetails = [];

   //numberlist : Array<number>=[]; //numberlist : Array<number>=[];
    isusercreate = false;
    constructor() {}
    onAddUsers(){
      this.users.push({
        id: this.users.length +1,
        username: `Person ${this.users.length +1}`,
      });
    }


    message = "This is the first paragraph";
    canEdit = false;
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = "This is the second paragraph";
    } else {
      this.message = " This is the third paragraph! what about this";
    }
  }

























    ngOnInit(): void {
    } //calling function or method -- this.prime(); 
         
        }

         
   /* 


   ngOnInit(): void { 
      this.prime(); //calling function or method -- this.prime();
    }
      prime(){
        var number =20;
        var isnumber;
        for(var i=2; i<20; i++){
          isnumber = 1;
        for(var j=2; j<i; j++){
          if(i%j === 0){
            isnumber=0;
            break;
          }
        }
        if(isnumber == 1){
          this.numberlist.push(i);
        }
        }
      }
   }*/

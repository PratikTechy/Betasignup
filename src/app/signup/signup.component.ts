import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public name = "Pratik";
  public mobile:any;
  public email="pratik123@gmail.com";
  public apiKey= "MDhmODA3OTUyMTE0OTRmZWUwMDViYjI1MGUyNWMyNGY2OGQ5ODBmNDdhYmE0Yzc3YTE2MTM3OGU3NGFjMjVmY2ZiYTk2YmU2NmYyNmJmMDMxYzc3ODRlYjliNjBmN2IxNGRkNDJjNDhmMWQ3ZDgyZGFlOTYzNTA4YTg3NzNlMWI0Mw=="
 

  constructor(  public appService: AppService,
    public router: Router,) {} 

  ngOnInit() {
  }

 

  public signupFunction: any = () => {

      let data = {
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        apiKey:this.apiKey
      }

      console.log(data);

      this.appService.signupFunction(data)
        .subscribe(
          data => {
            console.log("Data posted")
            console.log(data);
            
              this.router.navigate(['thank-you']);    
          },
          error => {
            console.log("some error occured");
            console.log(error.errorMessage);
          }
          
         ) 
         /*(apiResponse) => {

          console.log(apiResponse.status);

          if (apiResponse.status === 200) {

            this.router.navigate(['thank-you']);

        }else{
          
        }},(err) => {
          
          console.log(err);

        });*/

      
  } // end signupFunction

}

import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
   user!:UserData;
  repos:any;
  
  constructor(public userInfoService:UserInfoService) {
   }
   searchUser(username:string){
     this.userInfoService.getProfile(username).then((success: any)=>{
      this.user = this.userInfoService.user;
     },
     (error: any)=>{
       console.log(error)
     });
     this.userInfoService.getRepoData(username).then((success: any)=>{
      this.repos = this.userInfoService.repos;
     },
     (error: any)=>{
       console.log(error)
     });
   }
   ngOnInit(): void {
    this.searchUser('OndigoWendy');
  }
  }

  


  



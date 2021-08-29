import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { UserData } from './user-data';
import { RepoData } from './repo-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  user!: UserData;
  repos!: RepoData;
 
  constructor(private httpClient: HttpClient){ 
    this.user = new UserData("",0,"",0,0,0,"","","");
    this.repos = new RepoData("","","","",new Date(),"");
}
getProfile(username:string){
  interface retrieveUserData{
      name:string;
      login: string;
      url:string
      avatar_url:string;
      type:string;
  }
   let userApiUrl = 'https://api.github.com/users/'+username+'?client_id='+"accessToken="+environment.accessToken;
let promise = new Promise<void>((resolve,reject) =>{
  this.httpClient
  .get<retrieveUserData>(userApiUrl)
  .toPromise()
  .then
  ((response: any) => {
    this.user = response;
    resolve()
  },
      (error: any)=>{
    this.user.name = "User not found"

    reject(error)
    })
  })
  return promise;
}

getRepoData(username:string){
  interface retrieveRepoData{
    name:string;
    description:string;
    language:string;
    created_at:Date
    
  }
  
  let repoUrl = 'https://api.github.com/users/'+username+'/repos?order=created&sort=asc?client_id='+environment.accessToken;
  let promise = new Promise<void>((resolve,reject) =>{
    this.httpClient.get<retrieveRepoData>(repoUrl).toPromise().then
    ((response: any) => {
        this.repos = response;
        console.log(this.repos);
      resolve()
    },
      (        error: any)=>{
      this.repos.name = "Repository not found"

      reject(error)
      })
    })
    return promise;
}
 


    
}
    




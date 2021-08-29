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
    this.user = new UserData("",0,"",0,0,0,"");
    this.repos = new RepoData("","","","",new Date(),"");
}
getProfile(username:string){
  interface ApiResponse{
      name:string;
      login: string;
      url:string
      avatar_url:string;
      followers:number;
      following:number;
      public_repos:number;
  }
let userApiUrl = 'https://api.github.com/users/'+username+'?client_id='+"accessToken="+environment.accessToken;
//let userApiUrl = 'https://api.github.com/users/daneden?access_token=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';
let promise = new Promise<void>((resolve,reject) =>{
  this.httpClient
  .get<ApiResponse>(userApiUrl)
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
  interface ApiResponse{
    name:string;
    html_url:string;
    description:string;
    language:string;
    created_at:Date
    
  }
  //https://api.github.com/users/"+ uname +"?access_token=" + environment.githubApi
  let repoUrl = 'https://api.github.com/users/'+username+'/repos?order=created&sort=asc?client_id='+environment.accessToken;
  let promise = new Promise<void>((resolve,reject) =>{
    this.httpClient.get<ApiResponse>(repoUrl).toPromise().then
    ((response: any) => {
        this.repos = response;
        console.log(this.repos);
      resolve()
    },
      (        error: any)=>{
      this.repos.name = "We couldn’t find any repositories matching the name given"

      reject(error)
      })
    })
    return promise;
}
 


    
}
    




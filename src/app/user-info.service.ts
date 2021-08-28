import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { UserData } from './user-data';
import { RepoData } from './repo-data';
//import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  [x: string]: any;
 user!: UserData;
 repos!: RepoData;

  constructor(private httpClient: HttpClient){ 
    console.log("ready");
    this.user = new UserData("",0,"",0,0,0,"");
    this.repos = new RepoData("","","","",new Date());
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

// getUsers(){

//   let promise = new Promise<void>((resolve, reject) => {
//     let apiURL = `https://api.github.com/users?per_page=20`;
//     this.httpClient
//         .get(apiURL)
//         .toPromise()
//         .then
//             (
//               res => {
//               //  Success
//                this.users
//                 resolve();
//               },
//               msg => {
//                 // Error
//                 reject(msg);
//               }
//       );
//   });
//   //return promise;
//   console.log(promise);
// }

// getUsers(){
//   return this.httpClient.get('https://api.github.com/users?per_page=20')
  
// }

// getUsers(){
// return this.httpClient.get('https://api.github.com/users/'+ this.username+ "client_id" +
//        this.map((res: { json: any; }) => res.json));
// }
let userUrl = 'https://api.github.com/users/'+username+'?client_id='+environment.clientId + "&client_secret="+environment.clientSecret;

let promise = new Promise<void>((resolve,reject) =>{
  this.httpClient.get<ApiResponse>(userUrl).toPromise().then
  ((response: any) => {
    this.user = response;

    resolve()
  },
    (      error: any)=>{
    this.user.name = "We couldn’t find any users matching the name given"

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
  let repoUrl = 'https://api.github.com/users/'+username+'/repos?order=created&sort=asc?client_id='+environment.clientId + '&client_secret='+environment.clientSecret;
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
function getRepoData(username: any, string: any) {
  throw new Error('Function not implemented.');
}


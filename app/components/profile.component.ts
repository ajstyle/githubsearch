import { Component } from '@angular/core';
import {GithubService} from '../services/github.service' ;
@Component({
  moduleId : module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  { 

 user:any;
 repos:any[];  
 username:string ; 

 	constructor(private _githubservice  : GithubService){
 		     this.user = false ;

 	}

 searchUser(){

             this._githubservice.updateUser(this.username);
 	 		     this._githubservice.getUser().subscribe(user => {
 		     	this.user =  user ;  
               if(!user.location)
               	  {
               	  	user.location = "----------" ;
               	  }  
               if(!user.blog)
                 {
                 	user.blog = "----------" ;
                 }	  
 		     }) ;   
 	         this._githubservice.getRepos().subscribe(repos => {
 		     	this.repos =  repos ;  
               	  console.log(this.repos);
 		     }) ;   

 }



}
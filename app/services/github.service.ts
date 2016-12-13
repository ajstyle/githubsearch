import {Injectable} from '@angular/core' ; 
import {Http , Headers} from '@angular/http' ; 
import 'rxjs/add/operator/map' ;

@Injectable()
export class GithubService{
	private username:string ; 
	private client_id ='6a26c4f716ee5384955f';
	private client_secret ='4d1a802c5e30451d8ee1dade931845cc21bcaf70';


    constructor(private _http: Http){
    	console.log("Git hub service started");
        this.username = 'ajstyle' ; 
    }

getUser()
{
	 return this._http.get('http://api.github.com/users/'+this.username+'?client_id = '+this.client_id+'&client_secret = '+this.client_secret)
	 .map(res => res.json()) ;  
}

getRepos()
{
	 return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id = '+this.client_id+'&client_secret = '+this.client_secret)
	 .map(res => res.json()) ;  
}

updateUser(username:string){
this.username = username ; 
}



}


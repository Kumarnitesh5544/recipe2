import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { 
  }
   getbyname(id:string){
    return this.http.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${id}&app_id=80b22b35&app_key=6eeea210e4b49acb6deabfaf2eafd816`)
   
   }
   getsinglerecipe(id:string){
     return this.http.get(`https://api.edamam.com/search?app_id=80b22b35&app_key=6eeea210e4b49acb6deabfaf2eafd816&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${id}`)
   }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  id1:any;
 data: Array<any>=[];
  constructor(private route:ActivatedRoute, private router:Router,private project:ProjectService) {
    this.id1=this.route.params.subscribe((res:any)=>{
       console.log(res);
      this.project.getbyname(res.id).subscribe((res:any)=>{
    
        console.log(res.hits);
          this.data=res.hits;
        })
      

    });
   
   }

  ngOnInit(): void { 

  }
  //  console.log(this.id1);
  searchrecipe(id:string){
    // this.recipes.findRecipeById(id.split("#")[1]);
    this.router.navigate(["/onerecipe",id.split("#")[1]]);
  }

}


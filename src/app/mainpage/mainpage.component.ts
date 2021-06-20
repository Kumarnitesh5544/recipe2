import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{  ProjectService} from '../project.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  recipe1:string="";
  constructor(private recipes:ProjectService,private router:Router) { }

  ngOnInit(): void {
  }
  recipeSearch(){
    console.log(this.recipe1);    
    this.router.navigate(['recipe',this.recipe1]);
  // this.recipe="";
  }
  
}

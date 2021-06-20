import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService} from '../project.service';

@Component({
  selector: 'app-onerecipe',
  templateUrl: './onerecipe.component.html',
  styleUrls: ['./onerecipe.component.css']
})
export class OnerecipeComponent implements OnInit {
  id1: any;
  data: any;
  constructor(private router:Router,private project:ProjectService, private route: ActivatedRoute) {
    this.id1=this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.project.getsinglerecipe(this.id1).subscribe((res:any)=>{
      this.data=res;
    })
  }

}

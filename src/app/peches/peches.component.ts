import { Component, OnInit, OnDestroy, Optional } from '@angular/core';
import {  PechesService } from '../peches.service';



@Component({
  selector: 'app-peches',
  templateUrl: './peches.component.html',
  styleUrls: ['./peches.component.css'],
  providers: [PechesService]
})
export class PechesComponent implements OnInit {


  
  peches: any = [];
  constructor(private pecheService: PechesService) {
    setInterval(() => this.reloadPage(), 15000);
   }
  ngOnInit() {
    this.pecheService.getAllPeches().subscribe(peches => {
      this.peches = peches;

  
       

      console.log(peches)
    });
   

  }

  
 
  reloadPage() {
    // Solution 1:   
    //  this.router.navigate('localhost:4200/new');
  
    // Solution 2:
     this.ngOnInit();
  }


}

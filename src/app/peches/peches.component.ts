import { Component, OnInit } from '@angular/core';
import {  PechesService } from '../peches.service';

@Component({
  selector: 'app-peches',
  templateUrl: './peches.component.html',
  styleUrls: ['./peches.component.css'],
  providers: [PechesService]
})
export class PechesComponent implements OnInit {

  peches: any = [];
  constructor(private pecheService: PechesService) { }
  ngOnInit() {
    this.pecheService.getAllPeches().subscribe(peches => {
      this.peches = peches;
    });

  }

}

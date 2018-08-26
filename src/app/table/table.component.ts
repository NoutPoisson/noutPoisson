import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { PechesService } from '../peches.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [PechesService]
})
export class TableComponent implements OnInit {
  peches: any = [];
  constructor(private pecheService: PechesService) { }

  ngOnInit() {
    this.pecheService.getAllPeches().subscribe(peches => {
      this.peches = peches;
    });
  }

}

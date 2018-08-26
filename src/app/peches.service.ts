import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"; 


@Injectable()
export class PechesService {

  constructor(private http : HttpClient) {}

  getAllPeches() {
  return this.http.get('/routes/peches').pipe (map (peches => {
    return peches;
    }));
  }
}

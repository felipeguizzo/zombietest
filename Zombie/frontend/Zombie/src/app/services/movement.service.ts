import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";
import { Movement } from '../models/Movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private apiPath: string = "https://localhost:5001/v1/movements";

  header = new HttpHeaders()
     .set('Content-type', 'application/json');

  constructor(private http: HttpClient) { }

  get(): Observable<Movement[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToMovements)
    )
  }

  getById(id: string): Observable<Movement> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToMovement)
    )
  }

  insert(movement: Movement): Observable<Movement> {
    // var movementConverted = JSON.stringify(movement);
    return this.http.post(this.apiPath, movement, {headers: this.header}).pipe(
      catchError(this.handleError),
      map(this.jsonDataToMovement)
    )
  }

  // Métodos privados
  private jsonDataToMovements(jsonData: any[]): Movement[] {
    const movements: Movement[] = [];
    jsonData.forEach(element => movements.push(element as Movement));
    return movements;
  }

  private jsonDataToMovement(jsonData: any): Movement {
    return jsonData as Movement;
  }

  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}
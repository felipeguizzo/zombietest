import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";
import { Resource } from '../models/Resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiPath: string = "https://localhost:5001/v1/resources";

  constructor(private http: HttpClient) { }

  get(): Observable<Resource[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToResources)
    )
  }

  getById(id: string): Observable<Resource> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToResource)
    )
  }

  insert(resource: Resource): Observable<Resource> {
    return this.http.post(this.apiPath, resource).pipe(
      catchError(this.handleError),
      map(this.jsonDataToResource)
    )
  }

  update(resource: Resource): Observable<Resource> {
    //const url = `${this.apiPath}/${resource.id}`;

    return this.http.put(this.apiPath, resource).pipe(
      catchError(this.handleError),
      map(() => resource)
    )
  }

  delete(id: string): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

  // Métodos privados
  private jsonDataToResources(jsonData: any[]): Resource[] {
    const resources: Resource[] = [];
    jsonData.forEach(element => resources.push(element as Resource));
    return resources;
  }

  private jsonDataToResource(jsonData: any): Resource {
    return jsonData as Resource;
  }

  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}
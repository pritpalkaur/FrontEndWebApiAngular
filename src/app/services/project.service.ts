import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'https://localhost:7169/api/projects';

  constructor(private http: HttpClient) { }

  getProjectsById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetProjectsById/${id}`);
  }
}

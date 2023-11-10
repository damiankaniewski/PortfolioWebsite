import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProjectsOffline():Observable<any[]> {
    return of([
      {
        name: 'UE5 game',
        description: 'game in a nearly future',
        videoUrl: 'https://youtu.be/bRrjj3ojuyQ',
        photoUrl: 'assets/images/testWebsite.jpg'
      }
    ]);
  }
}

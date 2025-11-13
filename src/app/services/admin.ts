import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStaff } from '../interfaces/staff';


@Injectable({
  providedIn: 'root'
})
export class Admin {
  constructor ( private http: HttpClient ) {}

 getStaff () : Observable<IStaff[]> {
    return this.http.get<IStaff[]>('https://jsonplaceholder.typicode.com/users');
  }
  
  createStaff ( staffData: IStaff ) : Observable<IStaff> {
    return this.http.post<IStaff>('https://jsonplaceholder.typicode.com/users', staffData);
  }

  updateStaff ( id: number, staffData: Partial<IStaff> ) : Observable<IStaff> {
    return this.http.put<IStaff>(`https://jsonplaceholder.typicode.com/users/${id}`, staffData);
  }
  deleteStaff ( id: number ) : Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
 
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL: string;
  
  constructor(private httpClient: HttpClient) {
    this.baseURL = "http://localhost:8082/api/v1/employees";
   }


 
getEmployeesList(): Observable<Employee[]>{
  return this.httpClient.get<Employee[]>('${this.baseURL}');
  }

    createEmployee(employee: Employee): Observable<Object>{
     return this.httpClient.post<Employee>(this.baseURL,employee);
    //  return this.httpClient.post<Employee>('${this.baseURL}', employee);  
  }

    public getEmployeeById(id: number): Observable<Employee>
    {
      return this.httpClient.get<Employee>(this.baseURL);
     //return this.httpClient.get<Employee>('${this.baseURL}/${id}');
    }

    public updateEmployee(id:number, employee: Employee): Observable<Object>
    {
    return this.httpClient.put<Employee>(this.baseURL,id);
  //    return this.httpClient.put('${this.baseURL}', employee);  
}

    public deleteEmployee(id:number): Observable<Object>
    {
      
    return this.httpClient.delete('${this.baseURL}/${id}');
    }

    public findAll():Observable<Employee[]>
    {
      return this.httpClient.get<Employee[]>(this.baseURL);
    }
}


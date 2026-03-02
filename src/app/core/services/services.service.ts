import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Service } from "../models/services.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ServiceService {

  private readonly API_URL = `${environment.apiUrl}/services`;

  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.API_URL);
  }
}
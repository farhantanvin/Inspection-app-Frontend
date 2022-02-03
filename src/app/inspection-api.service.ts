import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InspectionApiService {
  readonly inspectionAPIUrl = 'https://localhost:7240/api';

  constructor(private http: HttpClient) {}

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspections');
  }

  addInspection(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/inspections', data);
  }
  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/inspections/${id}`, data);
  }
  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspections/${id}`);
  }

  //Inspection Types

  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectionsTypes');
  }

  addInspectionTypes(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/inspectionsTypes', data);
  }
  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(
      this.inspectionAPIUrl + `/inspectionsTypes/${id}`,
      data
    );
  }
  deleteInspectionTypes(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspectionsTypes/${id}`);
  }

  //Statuses

  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Status');
  }

  addStatus(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/Status', data);
  }
  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/Status/${id}`, data);
  }
  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/Status/${id}`);
  }
}

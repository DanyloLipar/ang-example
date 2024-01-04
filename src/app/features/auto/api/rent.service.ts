import { Injectable } from "@angular/core";
import { ApiService } from "../../../core/services/api.service";
import { Observable } from "rxjs";
import { CollectionResponse } from "../../../core/interfaces/collection-responce.interface";
import { Rent } from "../interfaces/rent.interface";
import { AutoAdd } from "src/app/core/interfaces/auto-add.interface";

@Injectable({
  providedIn: "root",
})
export class RentService {
  baseUrl = "/auto";
  constructor(private readonly apiService: ApiService) {}

  public getRents(): Observable<CollectionResponse<any>> {
    return this.apiService.get<CollectionResponse<any>>(`${this.baseUrl}`);
  }

  public getRentById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.baseUrl}/${id}`);
  }

  public createRent(data: Partial<AutoAdd>): Observable<AutoAdd> {
    const formData = new FormData();
    for (const property in data) {
      if (Object.prototype.hasOwnProperty.call(data, property)) {
        if (typeof data[property as keyof AutoAdd] === "object") {
          formData.append(property, JSON.stringify((<any>data)[property]));
        } else {
          formData.append(property, (<any>data)[property]);
        }
      }
    }

    console.log(typeof formData.getAll("payments_allowed")[0]);
    return this.apiService.post<AutoAdd>(`${this.baseUrl}/rents`, formData);
  }

  public updateRent(id: string, data: AutoAdd): Observable<AutoAdd> {
    const formData = new FormData();

    for (const value in data) {
      const key = value as keyof AutoAdd;

      if (data[key]) {
        formData.append(value, data[key] as string);
      }
    }

    return this.apiService.post<AutoAdd>(
      `${this.baseUrl}/${id}?_method=PUT`,
      formData
    );
  }

  public deleteRent(id: string): Observable<Rent> {
    return this.apiService.delete<Rent>(`${this.baseUrl}/${id}`);
  }
}

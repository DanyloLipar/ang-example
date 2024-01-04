import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private readonly hostUrl: string = environment.url;
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {
    const filters = {
      search: "exampleSearch",
      relation: {
        greaterThan: [10, 20],
        lessThan: [5, 15],
      },
      order: {
        name: "asc",
        date: "desc",
      },
      cursor: "12345",
      customField: {
        equals: "customValue",
        contains: "partialValue",
      },
    };

    console.log(filters);
    console.log(this.buildQuery(filters));
  }

  get<T>(subUrl: string, options?: HttpClientRequestOptions): Observable<T> {
    const url = this.buildUrl(subUrl);
    return this.http.get<T>(url, options);
  }

  post<T>(
    subUrl: string,
    data: unknown,
    options?: HttpClientRequestOptions
  ): Observable<T> {
    const url = this.buildUrl(subUrl);
    return this.http.post<T>(url, data, options);
  }

  put<T>(subUrl: string, data: unknown): Observable<T> {
    const url = this.buildUrl(subUrl);
    return this.http.put<T>(url, data);
  }

  delete<T>(subUrl: string): Observable<T> {
    const url = this.buildUrl(subUrl);
    return this.http.delete<T>(url);
  }

  private buildUrl(subUrl: string): string {
    return `${this.apiUrl}${subUrl}`;
  }

  buildQuery(filters: any): string {
    const queryParts: string[] = Object.keys(filters).map((field) =>
      this.buildFilterParam(field, filters[field])
    );

    return queryParts.join("&");
  }

  private buildFilterParam(field: string, filterValue: any): string {
    switch (field) {
      case "search":
        return this.createFilterParam("filter[search]", filterValue);
      case "relation":
        return this.buildRelationFilterParam(filterValue);
      case "order":
        return this.buildOrderFilterParam(filterValue);
      case "cursor":
        return this.createFilterParam("cursor", filterValue);
      default:
        return this.buildGenericFilterParam(field, filterValue);
    }
  }

  private buildRelationFilterParam(filterValue: any): string {
    const relationParams: string[] = Object.keys(filterValue).map((operator) =>
      this.createFilterParam(
        `filter[relation][${operator}]`,
        filterValue[operator].join(",")
      )
    );
    return relationParams.join("&");
  }

  private buildOrderFilterParam(filterValue: any): string {
    const orderParams: string[] = Object.keys(filterValue).map((fieldName) =>
      this.createFilterParam(`order[${fieldName}]`, filterValue[fieldName])
    );
    return orderParams.join("&");
  }

  private buildGenericFilterParam(field: string, filterValue: any): string {
    const filterParams: string[] = Object.keys(filterValue).map((operator) => {
      const value = this.escapeSpecialCharacters(filterValue[operator]);
      return this.createFilterParam(`filter[${field}][${operator}]`, value);
    });
    return filterParams.join("&");
  }

  private createFilterParam(key: string, value: string): string {
    return `${key}=${value}`;
  }

  private escapeSpecialCharacters(value: string): string {
    return value.replace(/\*/g, "%").replace(/\?/g, "_");
  }
}

interface HttpClientRequestOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: "body";
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: "json";
  withCredentials?: boolean;
}

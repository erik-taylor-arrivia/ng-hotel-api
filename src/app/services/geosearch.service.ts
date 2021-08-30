import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchList } from '../interfaces/search-list';

@Injectable({
  providedIn: 'root',
})
export class GeoSearchService {
  constructor(private http: HttpClient) {}
  geoSearch(place: string) {
    const url = `https://geoservices-wa-dev-usw2.azurewebsites.net/api/v1/places/suggestions/${place}`;
    return this.http.get(url);
  }
}

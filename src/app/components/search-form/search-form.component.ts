import { Component, OnInit } from '@angular/core';
import { SearchList } from 'src/app/interfaces/search-list';
import { GeoSearchService } from 'src/app/services/geosearch.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  placeName: string = '';
  depatureDate: string = '';
  arrivalDate: string = '';
  placesResult?: SearchList[];
  loading: boolean = false;

  constructor(private geosearchService: GeoSearchService) {}

  ngOnInit(): void {}

  handlePlaceInput(): void {
    this.loading = true;
    this.geosearchService.geoSearch(this.placeName).subscribe(
      (resp: any) => {
        this.placesResult = resp.places;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error);
        debugger;
      }
    );
  }

  handlePlaceClick(): void {
    // Handle place click and lat/long
  }
}

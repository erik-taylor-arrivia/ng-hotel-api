import { Component, OnInit } from '@angular/core';
import { SearchList } from 'src/app/interfaces/search-list';
import { SearchListService } from 'src/app/services/search-list.service';

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

  constructor(private searchListService: SearchListService) {}

  ngOnInit(): void {}

  handlePlaceInput(): void {
    this.searchListService.geoSearch(this.placeName).subscribe(
      (resp: any) => {
        this.placesResult = resp.places;
      },
      (error) => {
        alert(error);
        debugger;
      }
    );
  }

  handlePlaceClick(): void {
    // Handle place click and lat/long
  }
}

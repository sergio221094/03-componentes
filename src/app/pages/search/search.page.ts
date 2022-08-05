import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Album } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: Album[] = [];
  textoBuscar = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe(response => {
      this.albumes = response;
    });
  }

  onSearchChange(event) {
    this.textoBuscar = event.detail.value;
  }

}

import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  constructor(private annonceService: AnnoncesService) { }

  annonces = [];
  page = 0;
  offset = 20;

  ngOnInit(): void {
    this.annonceService.getAnnonces(this.page,this.offset).subscribe(data=>{
      this.annonces = data.content;
      this.page = this.page+1;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { ReferencesService } from '../services/references.service';

@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.scss']
})
export class CreateAnnonceComponent implements OnInit {

  constructor(private annonceService: AnnoncesService, private referenceService: ReferencesService ) { }

    categories = [];

  ngOnInit(): void {
    this.referenceService.getCategories().subscribe(data=>{
      this.categories = data;
    });
  }

}

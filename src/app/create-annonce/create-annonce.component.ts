import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { ReferencesService } from '../services/references.service';
import { Annonce } from '../model/Annonce';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.scss']
})
export class CreateAnnonceComponent implements OnInit {

  constructor(private annonceService: AnnoncesService, private referenceService: ReferencesService, 
    private formBuilder: FormBuilder, private tokenStorage: TokenStorageService ) { }

    categories = [];
    

    createForm: FormGroup;
    file: any;
    showSpinner: boolean = false;

  ngOnInit(): void {
    this.referenceService.getCategories().subscribe(data=>{
      this.categories = data;
    });
   

    this.createForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      categorie: ['', Validators.required],
      montant: ['', Validators.required],
      description: ['']
    });
}

f() {
  return this.createForm;
}

onSubmit(): void {

  if(this.createForm.invalid) {
    return;
  }

  let annonce: any = {};
  let formValue = this.createForm.value;
  annonce.libelle = formValue.libelle;
  annonce.categorie = {};
  annonce.categorie.id = formValue.categorie
  annonce.montant = formValue.montant;
  annonce.description = formValue.description;
  annonce.prix = formValue.montant;
  let userConnected = this.tokenStorage.getUser();
  annonce.vendeur = userConnected;
  this.showSpinner = true;
  this.annonceService.createAnnonce(annonce).subscribe(data=>
      {
        if(this.file != null && this.file != undefined) {
            this.annonceService.postImageAnnonce(this.file, data).subscribe(result=>{
                this.showSpinner = false;
            
            });
        }else {
          this.showSpinner = false;
        }
        
      }
    );

}

onFileChanged(event) {
  this.file = event.target.files[0]
}


}

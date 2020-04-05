import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private router: Router) {
    
   }

  ngOnInit(): void {

  }

  showConnect(): boolean {
    return !this.tokenStorage.isUserConnected();
  }
  deconnexion(){
    this.tokenStorage.signOut();
    this.router.navigate(['/liste']);
  }
}

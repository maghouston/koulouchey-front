import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    credentials = {};
    
  constructor(private formBuilder: FormBuilder, private authenticationService : AuthenticationService, 
    private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'login' : ['', Validators.required],
      'password' : ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    this.authenticationService.login(this.registerForm.value).subscribe(data=>{
      this.tokenStorageService.saveToken(data.token);
      this.router.navigate(['/liste']);
    });
  
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}

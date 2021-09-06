import { Component, OnInit } from '@angular/core';

// * Imports made manually

import { FormBuilder, Validators } from '@angular/forms';
import { CredentialsService } from 'src/app/services/keys/credentials.service';
import { LocalstorageService } from 'src/app/services/others/localstorage.service';
import { RedirectService } from 'src/app/services/others/redirect.service';

// * ---------------------

@Component({
  selector: 'app-Connection',
  templateUrl: './Connection.component.html',
  styleUrls: ['./Connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  //? variables
  public form: any;
  public data: any = {
    username: String,
    password: String
  };
  public userOnline: any = {
    name: '',
    online: false
  }


  constructor(
    private formBuild: FormBuilder,
    private credentials: CredentialsService,
    private redirect: RedirectService
  ) {
    this.crationForm()
    this.check()
  }

  ngOnInit() {
  }

  //TODO Form creation
  crationForm(): void {
    this.form = this.formBuild.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  //TODO get values
  getValues(need: string): void {
    return this.form.get(need).value
  }

  //TODO Create connection
  conect(): void {
  //? define values
    this.data.username = this.getValues('username')
    this.data.password = this.getValues('password')
  //?---------------
    this.credentials.getToken(this.data.username, this.data.password);
    setTimeout(() => {
      this.check()
    }, 1500);
  }

  //TODO Check permission
  check(): boolean{
    if (this.credentials.permission()) {
      this.redirect.to('home')
      return this.credentials.permission()
    }
    return this.credentials.permission()
  }

}

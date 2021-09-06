import { Component, OnInit } from '@angular/core';

// * Imports made manually

import { FormBuilder, Validators } from '@angular/forms';
import { LocalstorageService } from 'src/app/services/others/localstorage.service';

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


  constructor(
    private formBuild: FormBuilder,
    private lstorage: LocalstorageService
  ) {
    this.crationForm()
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
    this.lstorage.set('username', this.data.username)
  }

}

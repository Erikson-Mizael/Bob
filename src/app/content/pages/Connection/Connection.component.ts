import { Component, OnInit } from '@angular/core';

// * Imports made manually

import { FormBuilder, Validators } from '@angular/forms';

// * ---------------------

@Component({
  selector: 'app-Connection',
  templateUrl: './Connection.component.html',
  styleUrls: ['./Connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  public form: any;

  constructor(
    private formBuild: FormBuilder
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
  getValues(): void { }

  //TODO Create connection
  conect(): void { }

}

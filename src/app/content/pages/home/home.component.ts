import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/keys/credentials.service';
import { LocalstorageService } from 'src/app/services/others/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private lstorage: LocalstorageService,
    private credentials: CredentialsService) {

  }

  ngOnInit() {
    this.check()
  }

  check(){
    this.credentials.infoUser(this.lstorage.get('access_token'))
    setTimeout(() => {
      if (this.lstorage.get('online') == 't') {
        console.log('online')
      } else {
        this.lstorage.clear()
        window.location.reload()
        console.log('offline');
      }
    }, 1000);
  }

  logout() {
    this.credentials.logout()
    setTimeout(() => {
      window.location.reload()
    }, 500);
  }
}

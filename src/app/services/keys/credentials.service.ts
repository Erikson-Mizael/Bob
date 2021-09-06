import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../others/localstorage.service';


@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private requestOptionsInfo: any;
  constructor(
    private lstorage: LocalstorageService
  ) { }

  //TODO: Get token
  getToken(user: string, pass: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", user);
    urlencoded.append("password", pass);
    urlencoded.append("client_id", "bob-frontend");
    urlencoded.append("grant_type", "password");

    const requestOptions: {} = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(`${environment.urlKeycloak}token`, requestOptions)
      .then(response => response.text())
      .then(result => {
        //? To JSON
        var resultJson = JSON.parse(result)
        //? call save
        if (resultJson.error) {
          console.log(`Mensagem de erro ${resultJson.error}`);
        } else {
          //? save and get information
          this.save('access_token', resultJson.access_token)
          this.save('refresh_token', resultJson.refresh_token)
          this.infoUser(resultJson.access_token)
        }
      })
      .catch(error => console.log('error', error));
  }
  //TODO: Get info
  infoUser(token: string) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions: {} = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/auth/realms/Bob/protocol/openid-connect/userinfo", requestOptions)
      .then(response => response.text())
      .then(result => {
        var resultJson = JSON.parse(result)
        if (resultJson.error) {
          console.log(`Mensagem de error: ${resultJson.error}`);
          this.save('online', 'f')
        } else {
          this.save('sub', resultJson.sub)
          this.save('email_verified', resultJson.email_verified)
          this.save('name', resultJson.name)
          this.save('preferred_username', resultJson.preferred_username)
          this.save('given_name', resultJson.given_name)
          this.save('family_name', resultJson.family_name)
          this.save('email', resultJson.email)
          this.save('online', 't')
        }
      })
      .catch(error => {
        console.log('error', error)
      });
  }
  //TODO: logout
  logout() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${this.lstorage.get('token_access')}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("refresh_token", this.lstorage.get('refresh_token'));
    urlencoded.append("client_id", "bob-frontend");

    var requestOptionsLogout: {} = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(`${environment.urlKeycloak}logout`, requestOptionsLogout)
      .then(response => response.text())
      .then(result => {
        if (result.length > 1) {
          console.log('erro no logout');
        }
        else{
          this.lstorage.clear()
        }
      })
      .catch(error => console.log('=> error', error));
  }



  //TODO: Save to localstorage
  save(key: string, element: any): void {
    this.lstorage.set(key, element)
  }

  //TODO permission
  permission(): boolean{
    if (this.lstorage.get('access_token')) {
      return true
    }
    return false
  }

}

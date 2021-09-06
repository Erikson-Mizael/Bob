import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

constructor(private router: Router) { }

  to(page:string){
    this.router.navigate([page])
  }

}

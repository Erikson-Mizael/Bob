import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//* Imports made manually

import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionComponent } from './content/pages/Connection/Connection.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage-encrypt';
import { AuthGuardServiceService } from './services/others/auth-guard-service.service';

//* --------------------

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LocalStorageModule.forRoot({
      prefix: 'Bob',
      storageType: 'localStorage',
      encryptionActive: true,
      encryptionOptions: {
          encryptionKey: 'sonyK',
          encryptionIv: 'sonyV',
          encryptionSalt: 'sonyS'
      }
  })
  ],
  providers: [AuthGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { LocalStorageServiceEncrypt } from 'angular-2-local-storage-encrypt';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(
    private storage: LocalStorageServiceEncrypt
  ) {}

  // TODO Save to localstorage
  set(key: string, value: string): string {
    if (this.storage) {
      this.storage.set(key, value);
      return `Item saved (${value}) | key (${key})`;
    }
    return `Unsaved item (${value}) | key (${key})   `;
  }
  // TODO Get from localstorage
  get(key: string): any {
    if (this.storage) {
      return this.storage.get(key)
    }
  }
  // TODO Remove item from localstorage
  remove(key: string): string {
    if (this.storage) {
      this.storage.remove(key);
      return `Item removed ${this.get(key)} key (${key})`;
    }
    return `Item not removed from key (${key})`;;
  }
  // TODO Clear all localstorage
  clear(): string {
    if (this.storage) {
      this.storage.clearAll();
      return `localstorage clean`;
    }
    return `localstorage not clean`;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }
  // TODO Save to localstorage
  set(key: string, value: string): string {
    if (this.storage) {
      this.storage.setItem(key, value);
      return `Item saved (${value}) | key (${key})`;
    }
    return `Unsaved item (${value}) | key (${key})   `;
  }
  // TODO Get from localstorage
  get(key: string): string {
    if (this.storage) {
      return `Item returned ${this.storage.getItem(key)}`
    }
    return 'Item not returned';
  }
  // TODO Remove item from localstorage
  remove(key: string): string {
    if (this.storage) {
      this.storage.removeItem(key);
      return `Item removed ${this.get(key)} key (${key})`;
    }
    return `Item not removed from key (${key})`;;
  }
  // TODO Clear all localstorage
  clear(): string {
    if (this.storage) {
      this.storage.clear();
      return `localstorage clean`;
    }
    return `localstorage not clean`;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatngSystemService {
  operatingSystem = [
    {id: 'win', name: 'windows'},
    {id: 'mac', name: 'macOS'},
    {id: 'linux', name: 'linux'}
  ];
  constructor() { }

  getOperatingSystem() {
    return this.operatingSystem;
  }
}

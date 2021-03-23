import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
// api return response
  public getUserData() { 
    let userData = [
      {
        name : "Vijju",
        place : "LU",
        country : "Germany"
      },
      {
        name : "Suresh",
        place : "MDP",
        country : "India"
      },
      {
        name : "Sowji",
        place : "Abudhabi",
        country : "UAE"
      }
    ];
    return userData;
  }
}

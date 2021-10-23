import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})


export class BrailleService {
  
  endpoint = 'https://localhost:44341/api/Users/GetUsers';
 
  constructor(private httpClient: HttpClient) { }

  
  test(){
    console.log('hi servive')
    fetch('https://localhost:44341/api/Users/GetUsers')
    .then(response => response.json())
    .then(data => console.log(data));
  
    }

 

  
}

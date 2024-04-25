import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private subject = new Subject<any>();

  sendClickEvent(newCategoryId:string) {
    this.subject.next(newCategoryId);
  }

  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

}

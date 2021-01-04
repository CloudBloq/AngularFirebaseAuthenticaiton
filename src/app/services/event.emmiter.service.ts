import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventEmiterService {

    dataStr = new EventEmitter();

    constructor() { }

    logOut(data:string ) {
        this.dataStr.emit(data);
    }
}
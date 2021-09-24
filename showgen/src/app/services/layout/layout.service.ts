import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { layouts } from './data';
import { Layout, SuperSource } from './model';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  getAll(): BehaviorSubject<Layout[]> {
    return new BehaviorSubject(layouts);
  }

  getSsrcById(id: string): BehaviorSubject<SuperSource | null> {
    let list: SuperSource[] = layouts.filter(i => i.id === id)
      .filter(i => i instanceof SuperSource)
      .map(i => i as SuperSource);
    let res: SuperSource | null = null;
    if (list != null && list.length > 0) res = list[0];
    return new BehaviorSubject(res);
  }

}

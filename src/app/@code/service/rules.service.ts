import { Injectable } from '@angular/core';
import { Rules, Rule } from '../model/common.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  private rules: Rules;
  private rulesSubject = {
    inclusion: new BehaviorSubject<Map<number, Rule>>(new Map()),
    exclusion: new BehaviorSubject<Map<number, Rule>>(new Map())
  };

  constructor() {
    this.rules = {
      inclusion: new Map([]),
      exclusion: new Map([])
    };
    console.log('RuleService Up');
    this.rulesSubject['inclusion'].next(this.rules['inclusion']);
    this.rulesSubject['exclusion'].next(this.rules['exclusion']);
  }

  saveSpecificRule(type, key, value: Rule) {
    this.rules[type].set(key, value);
    this.rulesSubject[type].next(this.rules[type]);
  }

  addRules(type, value: Rule) {
    this.rules[type].set(value.id, value);
    console.log(this.rules[type], value);
    this.rulesSubject[type].next(this.rules[type]);
  }

  getRules(type) {
    return this.rulesSubject[type].asObservable();
  }

  deleteRule(type, key) {
    this.rules[type].delete(key);
    this.rulesSubject[type].next(this.rules[type]);
  }
}

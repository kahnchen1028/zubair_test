import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {
  RuleCategory,
  Rule,
  PageCategory,
  ContainCategory
} from 'src/app/@code/model/common.model';
import { RulesService } from 'src/app/@code/service/rules.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rule-block',
  templateUrl: './rule-block.component.html',
  styleUrls: ['./rule-block.component.scss']
})
export class RuleBlockComponent implements OnInit, OnDestroy {
  @Input() ruleTitle = '';
  @Input() ruleDescription = '';
  @Input() ruleType: RuleCategory;
  ruleSubscription: Subscription;
  rules$: Observable<Map<number, Rule>>;
  rulesForm: FormGroup;
  currentIndex = 0;

  constructor(private fb: FormBuilder, private rulesService: RulesService) {
    this.rulesForm = this.fb.group({
      rules: fb.array([])
    });
  }

  get rules() {
    return this.rulesForm.get('rules') as FormArray;
  }

  ngOnInit() {
    this.rules$ = this.rulesService.getRules(this.ruleType);
    this.ruleSubscription = this.rules$.subscribe((newRules) => {
      if (newRules.size > 0) {
        this.rules.clear();
        newRules.forEach((rule) => {
          this.rules.push(this.fb.group(rule));
        });
      } else {
        this.addNewRule();
      }
    });
  }

  addNewRule() {
    this.rulesService.addRules(this.ruleType, {
      id: new Date().getTime().toString(),
      page: PageCategory.ALL_PAGES,
      contain: ContainCategory.CONTAINS,
      partialUrl: null
    });
  }

  ngOnDestroy() {
    this.ruleSubscription.unsubscribe();
  }
}

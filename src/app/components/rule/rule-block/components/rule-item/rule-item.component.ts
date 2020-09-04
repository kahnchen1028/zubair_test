import { Component, OnInit, Input, HostListener } from '@angular/core';
import {
  PageCategory,
  ContainCategory,
  Rule
} from 'src/app/@code/model/common.model';
import { FormGroup } from '@angular/forms';
import { RulesService } from 'src/app/@code/service/rules.service';

@Component({
  selector: 'app-rule-item',
  templateUrl: './rule-item.component.html',
  styleUrls: ['./rule-item.component.scss']
})
export class RuleItemComponent implements OnInit {
  pageList = Object.values(PageCategory);
  containList = Object.values(ContainCategory);
  pageCategory = PageCategory;

  @Input() ruleForm: FormGroup;
  @Input() ruleType: string;

  @HostListener('change', ['$event.target'])
  onChange() {
    console.log('change');
    this.saveRule();
  }

  get pageValue() {
    return this.ruleForm.controls.page.value;
  }
  deleteRule() {
    let rule = this.ruleForm.value as Rule;
    this.rulesService.deleteRule(this.ruleType, rule.id);
  }

  saveRule() {
    let rule = this.ruleForm.value as Rule;
    this.rulesService.saveSpecificRule(this.ruleType, rule.id, rule);
  }

  constructor(private rulesService: RulesService) {}

  ngOnInit() {}
}

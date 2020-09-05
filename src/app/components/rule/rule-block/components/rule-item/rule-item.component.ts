import {
  Component,
  OnInit,
  Input,
  HostListener,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import {
  PageCategory,
  ContainCategory,
  Rule
} from 'src/app/@code/model/common.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RulesService } from 'src/app/@code/service/rules.service';

@Component({
  selector: 'app-rule-item',
  templateUrl: './rule-item.component.html',
  styleUrls: ['./rule-item.component.scss']
})
export class RuleItemComponent implements OnInit, AfterViewInit {
  pageList = Object.values(PageCategory);
  containList = Object.values(ContainCategory);
  pageCategory = PageCategory;

  @Input() ruleForm: FormGroup;
  @Input() ruleType: string;

  @HostListener('change', ['$event.target'])
  onChange() {
    this.saveRule();
  }
  constructor(private rulesService: RulesService, private el: ElementRef) {}

  get pageValue() {
    return this.ruleForm.controls.page.value;
  }

  get partialUrl() {
    return this.ruleForm.controls['partialUrl'] as FormControl;
  }

  deleteRule() {
    let rule = this.ruleForm.value as Rule;
    this.rulesService.deleteRule(this.ruleType, rule.id);
  }

  saveRule() {
    let rule = this.ruleForm.value as Rule;
    this.rulesService.saveSpecificRule(this.ruleType, rule.id, rule);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.ruleForm.controls['partialUrl']) {
      this.ruleForm.controls['partialUrl'].setValidators([Validators.required]);
    }
  }
}

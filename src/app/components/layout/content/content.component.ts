import { Component, OnInit } from '@angular/core';
import { RuleCategory } from 'src/app/@code/model/common.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  ruleCategory = RuleCategory;
  constructor() {}

  ngOnInit(): void {}
}

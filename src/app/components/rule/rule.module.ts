import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleBlockComponent } from './rule-block/rule-block.component';
import { RuleItemComponent } from './rule-block/components/rule-item/rule-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RuleBlockComponent, RuleItemComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [RuleItemComponent, RuleBlockComponent]
})
export class RuleModule {}

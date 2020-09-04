import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/layout/content/content.component';
import { RuleModule } from './components/rule/rule.module';

@NgModule({
  declarations: [AppComponent, ContentComponent],
  imports: [BrowserModule, RuleModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

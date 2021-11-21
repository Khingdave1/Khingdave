import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { SkillsComponent } from 'src/app/modules/skills/skills.component';
import { WorkComponent } from 'src/app/modules/work/work.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent
  ]
})
export class DefaultModule { }

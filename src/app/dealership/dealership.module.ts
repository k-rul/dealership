import { NgModule } from '@angular/core';
import { DealershipComponent } from './dealership.component';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { appRouting } from '../app.routing';
import { DealershipDetailsComponent } from './dealership-details.component';
import { IsActivePipe } from '../pipes/isActive.pipe';
import { DealershipNewComponent } from './dealership-new.component';



@NgModule({
  declarations: [
    DealershipComponent,
    DealershipDetailsComponent,
    DealershipNewComponent,
    IsActivePipe
  ],
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    appRouting
  ],
  providers: [],
  exports: [
    DealershipComponent
  ]
})
export class DealershipModule { }

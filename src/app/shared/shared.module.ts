import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';

const SHARED_COMPONENTS = [ HeaderComponent ];

@NgModule({
  declarations: [ ...SHARED_COMPONENTS  ],
  imports: [ MaterialModule, RouterModule ],
  exports: [ ...SHARED_COMPONENTS ]
})
export class SharedModule { }

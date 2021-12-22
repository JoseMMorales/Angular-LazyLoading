import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const Material = [
  MatToolbarModule
]

@NgModule({
  exports: [ Material ],
  imports: [ Material ]
})
export class MaterialModule { }


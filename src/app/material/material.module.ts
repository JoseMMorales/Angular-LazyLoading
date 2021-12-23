import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const Material = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule
]

@NgModule({
  exports: [ Material ],
  imports: [ Material ]
})
export class MaterialModule { }


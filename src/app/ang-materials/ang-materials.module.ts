import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

const materials = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule
];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class AngMaterialsModule {
}

// Modules
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Pipes
import { CamelizePipe } from 'ngx-pipes';
import { apiConfig } from '../../config/map_api';
// Components
import { MapComponent } from './map.component';
import { MapService } from './map.service';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: apiConfig.map_api,
    }),
    CommonModule,
  ],
  providers: [MapService, CamelizePipe],
  bootstrap: [],
})
export class MapModule {}

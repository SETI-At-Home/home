import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'home-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input()
  location: string;

  isPositionError = false;

  lat: number;
  lng: number;

  constructor(private ref: ChangeDetectorRef, private mapService: MapService) {}

  mapReadyHandler() {
    this.mapService.getGeoLocation(this.location).subscribe(
      coordinates => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
        this.ref.detectChanges();
      },
      () => {
        this.isPositionError = true;
      }
    );
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppInitializationService } from './services/app-initialization.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'Hotel Admin PWA';
  private appInitService = inject(AppInitializationService);

  ngOnInit(): void {
    console.log('🏨 Hotel Admin PWA Started');
    // AppInitializationService automatically initializes in constructor
  }
}

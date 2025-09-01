import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PwaService } from './services/pwa.service';
import { BackupService } from './services/backup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'Hotel Admin PWA';

  private pwaService = inject(PwaService);
  private backupService = inject(BackupService);

  ngOnInit(): void {
    // Initialize PWA services
    console.log('PWA services initialized:', {
      pwa: this.pwaService.getAppInfo(),
      backups: this.backupService.backupList().length,
    });
  }
}

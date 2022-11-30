import { Component, OnInit, isDevMode } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'utc-pwa';
  constructor(
    private serviceWorker: SwUpdate
  ) {

  }

  ngOnInit(): void {

    // esto solo funciona en modo de produccion 
    // asi que validamos que estemos en modo de produccion
    if (!isDevMode()) {
      // revisa si existe una nueva version de los assets
      // o del contenido
      this.serviceWorker.versionUpdates.subscribe(event => {
        if (event.type === "VERSION_DETECTED") {
          console.log("Nueva version disponible")
          window.location.reload()
        }
      })
      // lanza la verificacion mediante HASH de los assets
      // si existe alguna diferencia, este manda un evento
      // de nuevas actualizaciones
      this.serviceWorker.checkForUpdate()
    }
  }
}

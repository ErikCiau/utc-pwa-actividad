import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: '',
    templateUrl: './scanner-todo.component.html',
    styleUrls: ['./scanner-todo.component.scss']
})
export class ScannerTodoComponent {
    @ViewChild('video1') videoRef!: ElementRef
    private video: any;
    public videoCapable = true;
    public pictureTaken = false;
    public downloadLink!: string;
    private mediaStream: any;

    ngAfterViewInit() {

        this.video = this.videoRef.nativeElement;

        // verificamos permiso de acceso a camara y que camaras tenemos disponibles
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // definimos lo que queremos capturar
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            })
                .then(stream => {
                    this.mediaStream = stream;
                    this.videoCapable = true;
                    const that = this;
                    this.video.srcObject = this.mediaStream;
                    this.video.play() // iniciamos el video en sequencia de imagenes
                })
                .catch(err => {
                    this.videoCapable = false;
                });
        }
    }

    onSnap() {
        this.pictureTaken = true;
        this.video.pause();
        // recorremos la secuencia de imagenes o FPS
        for (const track of this.mediaStream.getTracks()) {
            track.stop();
        }
        this.video.srcObject = null;
    }

}
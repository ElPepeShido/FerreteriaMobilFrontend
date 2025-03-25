import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('Agregar') AgregarModal!: IonModal;
  
    message = 'Puedes tener un total de 3 direcciones distintas.';
    name!: string;
  
    cancel(modal: IonModal) {
      modal.dismiss(null, 'cancel');
    }
  
    confirm(modal: IonModal) {
      modal.dismiss(this.name, 'confirm');
    }
    onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
      if (event.detail.role === 'confirm') {
        this.message = `Hello, ${event.detail.data}!`;
      }
    }
}

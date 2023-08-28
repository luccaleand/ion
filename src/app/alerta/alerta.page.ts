import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  ButtonsAlert = 'ok';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async alertaInput() {
    const alertaInput = this.alertController.create({
      header: 'Alerta com Input',
      subHeader: 'Muito show os inputs',
      inputs: [{
        name: 'nome',
        type: 'text',
        placeholder: 'Informe seu nome:'
      },
      {
        name: 'Informe a idade',
        type: 'number',
        placeholder: 'Informe a idade:'
      }
      ],
      buttons[
        {
        text:'Cancelar',
        role:'cancel'
          hander:() => {console.log{'Alert cancelado!!'}}
      }]
      /*       message: 'This is an alert!',
            buttons: ['OK'], */
    });
  }
}

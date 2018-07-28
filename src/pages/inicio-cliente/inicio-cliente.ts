import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup ,FormControl,Validators} from '@angular/forms';

import { environment } from "../../environments/environment";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Usuario } from "../../clases/usuario";
//import { ServicioUsuariosProvider } from '../../providers/servicio-usuarios/servicio-usuarios';
//import { ServicioFotosProvider } from '../../providers/servicio-fotos/servicio-fotos';
import { TranslateService } from '@ngx-translate/core';
//import { VerImagenPage } from '../ver-imagen/ver-imagen';
import { AbmClienteProvider } from "../../providers/abm-cliente/abm-cliente";
import { SpinnerPage } from "../../pages/pages-spinner/pages-spinner";
import { QrVehiculoClientePage } from '../../pages/qr-vehiculo-cliente/qr-vehiculo-cliente';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { QrLeerVehiculoClientePage } from '../../pages/qr-leer-vehiculo-cliente/qr-leer-vehiculo-cliente';
import { NuevoViajePage } from '../nuevo-viaje/nuevo-viaje';
import { PagesModalPage } from '../pages-modal/pages-modal';
import { DetalleViajeClientePage } from "../../pages/detalle-viaje-cliente/detalle-viaje-cliente";
import { ServicioFotosProvider, ServicioUsuariosProvider, ServicioViajesProvider, Settings } from '../../providers/providers';
import { EditarPerfilClientePage } from '../../pages/editar-perfil-cliente/editar-perfil-cliente';
import { LoginPage } from '../login/login';
import { ServicioAudioProvider } from '../../providers/servicio-audio/servicio-audio';

import { variableGlobal } from '../lenguajes';
import { Storage } from '@ionic/storage';
import { ConfigIdiomaPage } from '../config-idioma/config-idioma';

/**
 * Generated class for the InicioClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-cliente',
  templateUrl: 'inicio-cliente.html',
})
export class InicioClientePage {

usuarioDatos;
nombre;
foto;
private spinner;
mostrar;



language:any;
date:string;
hour:string;
monthNames: string[];
monthShortNames: string[];
daysNames: string[];
daysShortNames: string[];

constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private formBuilder: FormBuilder,
  private modalCtrl: ModalController,
 // private servicioUsuarios: ServicioUsuariosProvider,
 // private servicioFotos: ServicioFotosProvider,
  public viewCtrl: ViewController,
  private builder: FormBuilder,
  private camera: Camera,
  public alertCtrl: AlertController,
  private servicioCliente: AbmClienteProvider,
  private qrScanner: QRScanner,
  private servicioViajes: ServicioViajesProvider,
  public audioService:ServicioAudioProvider,
  private storage  : Storage)
 {
   this.language="";
  this.initialized();
  this.usuarioDatos = JSON.parse(sessionStorage.getItem('usuario'));
  this.nombre=this.usuarioDatos.nombre;
  this.foto=this.usuarioDatos.foto;
  }

  ionViewWillEnter(){
    this.storage.get('language')
    .then((language)=>{
      console.log("langgg: "+ language );
      if(language !== null){
        console.log("LANGUAGE: " + language);
        this.language = language;
      }
        else{
          this.language = variableGlobal.idiomas.es;
        }
      
    })
    .catch((error)=>{ console.log("Error al leer storage: " + error);
    })
    .then(()=>{
      console.log("Lenguaje: " + JSON.stringify(this.language));
    })
}

  initialized(){
     this.storage.get('language')
       .then((lang)=>{
         console.log("langgg: "+ lang );
         if(lang !== null){
           console.log("LANGUAGE: " + lang);
           this.language = lang;
         }
           else{
             this.language = variableGlobal.idiomas.es;
           }
         
       })
       .catch((error)=>{ console.log("Error al leer storage: " + error);
       })
       .then(()=>{
         console.log("Lenguaje: " + JSON.stringify(this.language));
       })
   }
 



  private spin(status: boolean) {
    if(this.spinner === undefined && status === true) {
      this.spinner = this.modalCtrl.create(SpinnerPage);
      this.spinner.present();
    } else if(this.spinner !== undefined && status === false) {
      this.spinner.dismiss();
      this.spinner = undefined;
    }
  }

  logout(){
    this.audioService.reproducirClick();
    sessionStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

  irAconfiguracion()
  {
    this.navCtrl.push(ConfigIdiomaPage, { 'language':this.language });
  }

}

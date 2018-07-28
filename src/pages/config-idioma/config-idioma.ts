import { Component,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ModalController } from 'ionic-angular';
import { variableGlobal } from '../lenguajes';
import { Storage } from '@ionic/storage';
import { InicioClientePage } from '../inicio-cliente/inicio-cliente';
import {  ServicioViajesProvider } from '../../providers/providers';
import { MyApp } from '../../app/app.component';
import { SpinnerPage } from "../../pages/pages-spinner/pages-spinner";
import { ServicioAudioProvider } from '../../providers/servicio-audio/servicio-audio';



declare const google; // para google maps
/**
 * Generated class for the ConfigIdiomaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config-idioma',
  templateUrl: 'config-idioma.html',
})
export class ConfigIdiomaPage {
  @ViewChild('map') mapElement: ElementRef;

  polylines: Array<object> = [];
  labels = ['A', 'B'];
  labelIndex = 0;
  map: any;
  watchId: any;


  language:any;
  lat:number;
  lng:number;
  formatted_address:any;
  address_components:any;
  idiomaSeleccionado;
  private spinner;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private servicioViajes: ServicioViajesProvider,private alertCtrl: AlertController, public modalCtrl: ModalController,public audioService:ServicioAudioProvider) {
   
    this.language = variableGlobal.idiomas.es;
    if(this.idiomaSeleccionado===undefined)
      {
         this.idiomaSeleccionado="";
      }
  }

  ionViewWillEnter(){
    this.storage.get('language')
    .then((language)=>{
      if(language !== null){
        console.log("LANGUAGE: " + language);
        this.language = language;
      }
        else{
          this.language = variableGlobal.idiomas.es;
        }

      this.idiomaSeleccionado=this.language.code;
    })
    .catch((error)=>{ console.log("Error al leer storage: " + error);
    })
    .then(()=>{
      console.log("Lenguaje: " + JSON.stringify(this.language));
    })
}

  ionViewDidLoad() {
    this.lat = -34.662305;
    this.lng = -58.36472349999997;
    this.startMap();
  }

  startMap() {
    console.log('Mapa iniciado');
    //let bsas = { lat: -34.6036844, lng: -58.3815591 };
   // let americaSur = { lat: -20.625045603853437, lng: -56.48316432867051 };
   let americaSur = { lat: this.lat, lng: this.lng};
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 4,
      center: americaSur,
      mapTypeId: 'roadmap'
    });
    
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.lat = event.latLng.lat();
      this.lng = event.latLng.lng();
      this.limpiarMapa();
      this.marcarMapa(event.latLng.lat(), event.latLng.lng());
      this.prueba(event.latLng.lat(), event.latLng.lng());
    });
  }




  marcarMapa(lat: number, long: number) {
      this.addMarker(lat, long);
  }
  
  addMarker(lat: number, long: number) { 
    console.log('Latitud[' + lat + ']  -  Longitud[' + long + ']');
     let marker = new google.maps.Marker({
      position: { lat: lat, lng: long },
      color: '#FFFF00',
      label: 'A',
      map: this.map
    });
    
  }


  cambiarIdioma()
  {
    console.log(this.idiomaSeleccionado);
    this.seleccionarLenguaje(this.idiomaSeleccionado);
  }


  seleccionarLenguaje(selection:string){
    this.idiomaSeleccionado=selection;
    switch(selection){
      case "es":  this.language = variableGlobal.idiomas.es;

                  break;
      case "en":  this.language = variableGlobal.idiomas.en;
                  break;

      case "de":  this.language = variableGlobal.idiomas.de;
                  break;

      case "ru":  this.language = variableGlobal.idiomas.ru;
                  break;

      case "fr":  this.language = variableGlobal.idiomas.fr;
                  break;

      case "pt":  this.language = variableGlobal.idiomas.pt;
                  break;
    }
  }



definirPais(){
  for(let component of this.address_components){
    if(component.short_name !== null){
      if(component.short_name.length == 2){
        this.definirLenguajeCode(component.short_name);
      }
    }
  }
}


definirLenguajeCode(code:string){
console.log("code: "+code);
  switch(code){
    //ES 
    case 'AR':
    case 'UY':
    case 'CL':
    case 'PY':
    case 'BO':
    case 'PE':
    case 'EC':
    case 'CO':
    case 'VE':
    case 'PA':
    case 'CR':
    case 'NI':
    case 'SV':
    case 'HN':
    case 'GT':
    case 'DO':
    case 'PR':
    case 'MX':
    case 'ES':
    case 'GQ':
    this.seleccionarLenguaje('es'); break;
    //EN 
    case 'GY':
    case 'US':
    case 'BZ':
    case 'VI':
    case 'JM':
    case 'US':
    case 'IE':
    case 'GB':
    case 'PG':
    case 'AU':
    case 'NZ':
    case 'SD':
    case 'SL':
    case 'LR':
    case 'GH':
    case 'NG':
    case 'SS':
    case 'KE':
    case 'UG':
    case 'ZM':
    case 'MW':
    case 'ZW':
    case 'BW':
    case 'NA':
    case 'ZA':
    case 'LS':
    case 'SZ':
    this.seleccionarLenguaje('en'); break;
    //DE 
    case 'DE':
    case 'CH':
    case 'AT':
    this.seleccionarLenguaje('de'); break;
    //RU 
    case 'BY':
    case 'UA':
    case 'MD':
    case 'RU':
    case 'KZ':
    case 'UZ':
    case 'KG':
    case 'TJ':
    this.seleccionarLenguaje('ru'); break;
    //FR 
    case 'GF':
    case 'HT':
    case 'CA':
    case 'FR':
    case 'BE':
    case 'DZ':
    case 'TN':
    case 'ML':
    case 'NE':
    case 'TD':
    case 'SN':
    case 'GN':
    case 'CI':
    case 'TG':
    case 'BF':
    case 'NE':
    case 'CM':
    case 'CF':
    case 'DJ':
    case 'CD':
    case 'GA':
    case 'MG':
    this.seleccionarLenguaje('fr'); break;
    //PT 
    case 'BR':
    case 'PT':
    case 'GW':
    case 'CG':
    case 'AO':
    case 'MZ':
    this.seleccionarLenguaje('pt'); break;
    default:
    this.seleccionarLenguaje('es'); break;
  }
}

prueba(lat: number, long: number)
{
this.spin(true);
  this.servicioViajes.geoCodingLatLong(lat, long)
  .then((data:any)=>{
    if(data != "undefined"){
      console.log(data);
      this.formatted_address = data.results[0].formatted_address;
      this.address_components = data.results[0].address_components;
      console.log("Direcciónnn: " + this.formatted_address);
      console.log("Detallee: " + JSON.stringify(this.address_components));
      this.definirPais();
    }
    this.spin(false);
  })
  .catch((error)=>{
    console.log("ERROR: al convertir coordenadas -> dirección: " + error);
    this.spin(false);
  })

}

guardar()
{
  this.audioService.reproducirExito();
  this.alertaExito();
  this.storage.clear();
  this.storage.set('language', this.language);
 // this.navCtrl.push(InicioClientePage, { 'language':this.language });
  this.navCtrl.pop();
}

alertaExito()
{
  let alerta = this.alertCtrl.create({
    title: this.language.alertaExitoIdioma.exitosamente,
    subTitle: this.language.alertaExitoIdioma.subTitle ,
    cssClass:"miClaseAlert",
  buttons: [this.language.alertaExitoIdioma.buttonsAceptar]
});
 alerta.present();
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

limpiarMapa()
{
this.startMap();
}





}

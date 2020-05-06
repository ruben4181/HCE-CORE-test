utils = require('../utils');
//console.log(utils.genIntervalArray(1, 10));
//console.log(utils.genRandomString(10));
const axios = require('axios');
const protocol = 'http://';
const baseURL = 'localhost';
const port = ':3001';
const path = '/eps/sign';

let config = {
  method : 'post',
  url : 'http://localhost:3001/eps/sign',
  path : '/eps/sign',
  headers : {'Content-Type': 'application/json', 'authorization' : ''},
}
for(var i=0; i<=1000; i++){
  config['data'] = {id : utils.genRandomNumber(300), password : utils.genRandomString(300)} //Contraseña incorrecta generada aleatoreamente
  axios(config).then((resp)=>{
    //console.log(resp.data);
    if(resp.data.status=='DECLINED'){ //Si lo rechaza es porque esta trabajando correctamente
      console.log("FIN PRUEBA (Exito)=====?========");
    } else{
      console.log("FIN PRUEBA (Fallo)===?==========");
    }
  }).catch((err)=>{
    console.log("Inicio prueba con password: incorrecto\n");
    console.log(err.response.data);
    console.log("FIN PRUEBA(Exito)===================\n")
  });

}

//Se solicita el token con passwords incorrectos
utils = require('../utils');
//console.log(utils.genIntervalArray(1, 10));
//console.log(utils.genRandomString(10));
const axios = require('axios');
const protocol = 'http://';
const baseURL = 'localhost';
const port = ':3001';
const path = '/eps/sign';

let idBuenos = [1061543081, 1061708563];

let config = {
  method : 'post',
  url : 'http://localhost:3001/users/sign',
  path : '/users/sign',
  headers : {'Content-Type': 'application/json', 'authorization' : ''},
}
for(var i=0; i<=1000; i++){
  let index=0;
  //Va a ir intercalando aleatoriamente entre los dos usuarios validos para loggearse
  if(utils.genRandomNumber(1)<5){
    index = 1;
  }
  config['data'] = {id : 1, password : utils.genRandomString(utils.genRandomNumber(2))} //Contraseña incorrecta generada aleatoreamente
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

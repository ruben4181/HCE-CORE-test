utils = require('../utils');
//console.log(utils.genIntervalArray(1, 10));
//console.log(utils.genRandomString(10));
const axios = require('axios');
const protocol = 'http://';
const baseURL = 'localhost';
const port = ':3001';
const path = '/eps/sign';
const idMalos = utils.genIntervalArray(2, 1010); //Intervalo con entidades no registradas en el sistema
let config = {
  method : 'post',
  url : 'http://localhost:3001/eps/sign',
  path : '/eps/sign',
  headers : {'Content-Type': 'application/json', 'authorization' : ''},
}
for(var i=0; i<=1000; i++){
  config['data'] = {id : idMalos[i], password : "ValleMedPassword"} //Contraseña correcta | ID malo
  axios(config).then((resp)=>{
    //console.log(resp.data);
    if(resp.data.status=='DECLINED'){ //Si lo rechaza es porque esta trabajando correctamente
      console.log("FIN PRUEBA (Exito)==============");
    } else{
      console.log("FIN PRUEBA (Fallo)==============");
    }
  }).catch((err)=>{
    console.log("Inicio prueba con password correcto, id erroneo");
    console.log(err.response.data, '\n');
    console.log("FIN PRUEBA(Exito)===================\n")
  });

}

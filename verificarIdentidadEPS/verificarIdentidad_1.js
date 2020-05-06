//Happy path identificar identidad eps
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
  data : {id : 1, password : "PWD"}
}
for(var i=0; i<=1000; i++){
  axios(config).then((resp)=>{
    console.log("INICIO PRUEBA====================");
    console.log(resp.data);
    if(resp.data.status=='OK'){
      console.log("FIN PRUEBA (Exito)=============");
    } else{
      console.log("FIN PRUEBA (Fallo)=============");
    }
  }).catch((err)=>{
    console.log(err.response.data);
  })

}

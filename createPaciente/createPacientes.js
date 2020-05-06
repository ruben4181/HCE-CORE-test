utils = require('../utils');
const axios = require('axios');
let validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlUeXBlIjoiRVBTIiwiY2hlY2siOnRydWUsImlkIjoxLCJpYXQiOjE1ODg3OTgzNzcsImV4cCI6MTU4ODgwNTU3N30.iDr0ZvZd2s9IxkaB6DfVU4puZG2a959oQjwLPahfTFE"

let config = {
  method : 'post',
  url : 'http://localhost:3001/eps/createUser',
  headers : {'Content-Type': 'application/json', 'authorization' : validToken},
}

for(var i=1000; i<=2000; i++){
  let body = {
    "DNI" : i,
  	"nombre" : utils.genRandomString(10)+" "+utils.genRandomString(10),
  	"fechaNacimiento" : "1988-01-16",
  	"estadoCivil" : "soltero",
  	"telefono" : utils.genRandomNumber(10),
  	"sexo" : "masculino",
  	"idEntidad" : 1
  }
  config['data']=body;
  axios(config).then((resp)=>{
    console.log('Inicio prueba==============');
    console.log(resp.data);
    if(resp.data.status=='OK'){
      console.log('Fin prueba (Exito)=======');
    }
  }).catch((err)=>{
    console.log("Inicio prueba==============");
    console.log(err);
    console.log("Fin prueba (Fallido)=======");
  });
}

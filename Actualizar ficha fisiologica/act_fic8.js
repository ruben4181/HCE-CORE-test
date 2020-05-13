//Happy path para crear historias clinicas
utils = require('../utils');
const axios = require('axios');
let validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlUeXBlIjoiRVBTIiwiY2hlY2siOnRydWUsImlkIjoxLCJpYXQiOjE1ODg3OTgzNzcsImV4cCI6MTU4ODgwNTU3N30.iDr0ZvZd2s9IxkaB6DfVU4puZG2a959oQjwLPahfTFE"
let config = {
  method : 'post',
  url : 'http://localhost:3001/eps/createHC',
  path : '/users/sign',
  headers : {'Content-Type': 'application/json', 'authorization' : validToken},
}

for(var i=1000; i<=2000; i++){
  let antecedentes = {
    "accidentes" : utils.genRandomString(100),
		"antecedentesHereditarios" : utils.genRandomString(100),
		"enfermedadesInfancia" : utils.genRandomString(100),
		"intervencionesQuirurgicas" : utils.genRandomString(100),
		"alergias" : utils.genRandomString(100),
		"inmunizacion" : utils.genRandomString(100)
  }
  let fisiologica = {
    "lactancia" : utils.genRandomString(100),
		"iniciacionSexual" : utils.genRandomString(100),
		"ginecoObstretico" : utils.genRandomString(100),
		"menarca" : utils.genRandomString(100),
		"embarazos" : utils.genRandomString(100),
		"partos" : utils.genRandomString(100),
		"abortos" : utils.genRandomString(100)
  }
  let idEntidad = 1;
  let DNI = i;
  config['data']={DNI, idEntidad, antecedentes, fisiologica};
  axios(config).then((resp)=>{
    console.log("Inicio prueba=============\n");
    console.log(resp.data);
    if(resp.data.status=='OK'){
      console.log("Fin prueba (Exito)======\n");
    } else{
      console.log("Fin prueba (Fallido)=====\n");
    }
  }).catch((err)=>{
    console.log("Inicio prueba=============\n");
    console.log(err.response.data);
    console.log("Fin prueba (Fallido)======\n");
  })
}

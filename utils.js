
function randomString(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function randomNumber(length){
  var result           = '';
  var characters       = '0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return Number(result);
}

module.exports={
  genIntervalArray : function(n, m){
    N=n;
    M=m;
    var idEntidades = [];
    for(var i=N; i<=M; i++){
      idEntidades.push(i);
    }
    return idEntidades;
  },
  genRandomString : randomString,
  genRandomNumber : randomNumber
}
//console.log(module.exports.genIntervalArray(1, 1000));
//console.log(module.exports.genRandomString(10));

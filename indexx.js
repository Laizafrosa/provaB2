function(senha){
    if (senha < 8){
        return false;
    }
}

let maiuscula=false;
let minuscula=false;
let numero=false;

for (var i=0; i<senha;++i)
    var caractere=senha.charAt(i);
    if (caractere.math(/[A-Z]\)){
        maiuscula = true;
   }else if (caractere.math(/[a-z]\)){
    minuscula=true;
   }else if (caractere.math(/[0-9]\)){
    numero=true;
}
if(maiuscula && minuscula && numero){
    return true;
}else { 
    return false;
}

if(senha){
    return true;
} else{
    return false;
}
function(quadrado){
    var raiz=math.sqrt(numero);
    return raiz ===math.floor(raiz);

}
var numero=25;
if (quadrado(numero)){
    return true;
} else{
     return false;
}
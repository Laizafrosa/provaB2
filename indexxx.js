function(fatorial){
    if (numero ===0|numero ===1) {
        return 1;
    }
    else 
      {var fatorial=1;
        for (var i=2;i<=numero;i++){
            fatorial *=i;
        }
        return fatorial;
    }
}
for(var i=1;i<=10;i++){
    var fatorial=fatorial(i);
}
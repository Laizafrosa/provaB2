function primo(number){
    if (number <=1) { 
        return false;
    }
}
// codigo para verificar se o numero é divisivel 
for (let i=2; i<number; i++) {
    if (number % i === 0 ){
        return false;
    }
}
return true;

for (let i=1; i<=1000; i++) {
    if(primo(i)) {
    console.log(i)
    }
}
    

//Написати функцію, яка порахує факторіал натурального числа

exports.factorial=(n)=> {
    var result = 1;
    while(n){
        result *= n--;
    }
    console.log( "\ntask 3: "+result ); 
    return result;
}
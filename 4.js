//Знайти елемент із найбільшою частотою повторень

exports.frequency=(arr,result)=>{
    
    for (let i=0;i<arr.length;++i){
        let a=arr[i];
        if(result[a]!=undefined){
            ++result[a];}
        else
            result[a]=1;
   }
   console.log(typeof result)
   console.log('\ntask4:')
   for(let key in result)
   console.log('number '+key+' - '+result[key]+' times')
}
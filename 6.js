//Написати реалізацію швидкого сортування масиву

const arr = [1, 213, 3, 5, 2, 8, 7];
exports.QuickSort = (A)=>{
function qsort(arr){
    if (arr.length<2){
        return arr;
    }else{
        const pivot=arr[Math.floor(Math.random()*arr.length)];
        const less=arr.filter(value=>value<pivot);
        const greater=arr.filter(value=>value>pivot);
       
        return[...qsort(less),pivot,...qsort(greater)];
    }
    
}
console.log('\ntask 6: '+qsort(arr));
}
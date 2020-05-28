//Написати функцію, яка поверне кількість днів для заданого місяця та року

exports.calendar = (month, year) =>{
    let days = new Date(year, month, 0).getDate();
    console.log(`\ntask 5: Year ${year} has 365 days and ${month} month has ${days} days`);
};
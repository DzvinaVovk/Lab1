//Написати функцію, яка поверне усі перестановки слова

exports.permute=(string)=> {
    function recur(string, prefix) {
        if (string.length === 0) {
            return [prefix];
        } else {
            var out = [];
            for (var i = 0; i < string.length; i++) {
                var pre = string.substring(0, i);
                var post = string.substring(i + 1);
                out = out.concat(recur(pre + post, string[i] + prefix));
            }
            return out;
        }
    }
    var distinct = {};
    recur(string, "").forEach(function(result) {
        distinct[result] = true;
    });
    console.log("task 2: "+Object.keys(distinct));
    return Object.keys(distinct);
 
}
 

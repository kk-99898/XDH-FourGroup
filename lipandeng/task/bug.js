sli('baavvaa', 'a');
function sli(str, sp) {
    var n = 0;
    var arr = [];
    var str1 = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] != sp) {
            str1 += str[i];
        } else {
            arr[n] = str1;
            str1 = "";
            n++;
        }
    }
    console.log(arr);
}

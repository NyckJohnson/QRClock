/*
Copyright (c) 2012 Nicholas Johnson, http://wordsare.me

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

https://github.com/jeromeetienne/jquery-qrcode
*/

$(document).ready(function(){
    makeClock();
});

$('#control').click(function(){
    makeClock();
});

function makeClock(){
    time = getTime();
    speed = GetSelectedItem();
    
    $('#qrclock').html('');
    $('#qrclock').qrcode({width: 200,
                          height: 200,
                          text: time});;
    window.timer = setTimeout(function(){makeClock()}, speed * 1000);
}

function getTime(){
    var dateT = new Date();
    dateTime =  dateT.getHours()
    + ':' +     dateT.getMinutes()
    + ':' +     dateT.getSeconds()
    + ' ' +     (dateT.getMonth()+1)
    + '/' +     dateT.getDate()
    + '/' +     (dateT.getYear()+1900);

    return dateTime;
}

function GetSelectedItem() {
    chosen = ""
    len = document.f1.r1.length
    
    for (i = 0; i < len; i++) {
        if (document.f1.r1[i].checked) {
            chosen = document.f1.r1[i].value
        }
    }
    
    return chosen;
}
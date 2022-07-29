var firstname= labelt("label","for","fname","Firstname");
var b1= linebreak("br");
var fin =inp("input","for" , "text","id","fname");
var b2=linebreak("br");
var lastname= labelt("label","for","lname","Lastname");
var b3=linebreak("br");
var lin= inp("input","for","text","id","lname");
var b4=linebreak("br");
var email=labelt("label","for","email","Email");
var b5=linebreak("br");
var emailin=inp("input","for","email","id","email");
var b6=linebreak("br");
var ph=labelt("label","for","phnum","PhoneNumber");
var b7=linebreak("br");
var phin=inp("input","for","number","id","phnum");
var b8=linebreak("br");
var press=labelt("button","for","submit","Enter");

document.body.append(firstname, b1,fin,b2,lastname,b3,lin,b4,email,b5,emailin,b6,ph,b7,phin,b8,press);

function labelt(tagn, tagattri, tagattrival, con) {
    var lab = document.createElement(tagn);
    lab.setAttribute(tagattri, tagattrival);
    lab.innerHTML = con;
    return lab;
}
 
function inp(tagn, tagattri, tagattrival, tagattri1, tagattrival1) {
    var give = document.createElement(tagn);
    give.setAttribute(tagattri, tagattrival);
    give.setAttribute(tagattri1, tagattrival1);
    return give;
}

function linebreak(brk)
{
    var bk=document.createElement(brk);
    return bk;
}
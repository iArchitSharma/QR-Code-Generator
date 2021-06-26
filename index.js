function WifiQR() {
    var ssid = document.getElementById("SSID").value;
    var pwd = document.getElementById("Password").value;
    var enc = document.getElementById("enc").value;
    var hidden = document.getElementById("hidden").checked;

    var valid = document.forms["WifiForm"]["SSID"].value;
    if (valid == null || valid == "") {
        document.getElementById("ssid-error").innerHTML = '<p style="color:red; font-size:15px;">Please enter a SSID</p>';
        document.getElementById("qrwifi").innerHTML = "<style>display:none;</style>";
    } else {
        document.getElementById("qrwifi").innerHTML = "<style>display:none;</style>";

        var qrcode = new QRCode(document.getElementById("qrwifi"), {
            text: "WIFI:S:" + ssid + ";T:" + enc + ";P:" + pwd + ";H:" + hidden + ";",
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        document.getElementById("ssid-error").innerHTML = "<style>display:none;</style>";
    }
}

function VcardQR() {
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var company = document.getElementById("company").value;
    var phone = document.getElementById("phone").value;
    var url = document.getElementById("url").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;


    document.getElementById("vcqr").innerHTML = "<style>display:none;</style>";

    var qrcode = new QRCode(document.getElementById("vcqr"), {
        text: "BEGIN:VCARD\r\nVERSION:3.0\r\nN:" + name + "\r\nTITLE:" + title + "\r\nORG:" + company + "\r\nTEL:" + phone + "\r\nURL:" + url + "\r\nEMAIL:" + email + "\r\nADR:" + address + "\r\nEND:VCARD",
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function smsQR() {
    var phnumber = document.getElementById("phnumber").value;
    var sms = document.getElementById("sms").value;

    var valid = document.forms["SMSForm"]["phnumber"].value;
    if (valid == null || valid == "") {
        document.getElementById("sms-error").innerHTML = '<p style="color:red; font-size:15px;">Please enter a Phone no.</p>';
        document.getElementById("smsrs").innerHTML = "<style>display:none;</style>";
    } else {
        document.getElementById("smsrs").innerHTML = "<style>display:none;</style>";

        var qrcode = new QRCode(document.getElementById("smsrs"), {
            text: "smsto:" + phnumber + ":" + sms,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        document.getElementById("sms-error").innerHTML = "<style>display:none;</style>";
    }
}

function QRurl() {
    var valid = document.forms["myForm"]["inputText"].value;
    if (valid == null || valid == "") {
        document.getElementById("error").innerHTML = '<p style="color:red; font-size:15px;">Please enter a text or url</p>';
        document.getElementById("urlqr").innerHTML = "<style>display:none;</style>";
    } else {
        document.getElementById("urlqr").innerHTML = "<style>display:none;</style>";
        const text1 = document.getElementById("inputText").value;
        var qrcode = new QRCode(document.getElementById("urlqr"), {
            text: text1,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        document.getElementById("error").innerHTML = "<style>display:none;</style>";
    }
}

function QRtext() {
    var valid = document.forms["texForm"]["inputText2"].value;
    if (valid == null || valid == "") {
        document.getElementById("error2").innerHTML = '<p style="color:red; font-size:15px;">Please enter a text </p>';
        document.getElementById("teqr").innerHTML = "<style>display:none;</style>";
    } else {
        document.getElementById("teqr").innerHTML = "<style>display:none;</style>";
        const text2 = document.getElementById("inputText2").value;
        var qrcode = new QRCode(document.getElementById("teqr"), {
            text: text2,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        document.getElementById("error2").innerHTML = "<style>display:none;</style>";
    }
}
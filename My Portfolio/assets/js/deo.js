function SendMail()
{
    var params={
        from_name:document.getElementById("fullName").ariaValueMax,
        emal_id:document.getElementById("emal_id").ariaValueMax,
        message:document.getElementById("message").value
    }
    emailjs.send("service_efxwf75","template_ono543i",params).then(function(res){
        alert("success!"+res.status);
    })
}
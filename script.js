var text = document.getElementById("text")
var gerar = document.getElementById("gerar")
var codigo = document.getElementById("qr-code")

function gerarQrCode(){
    
    var textValue = text.value

    if(!textValue) return

    codigo.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textValue}`
    
    console.log(textValue)
}

gerar.addEventListener("click", () => {

    gerarQrCode()
})

text.addEventListener("keydown", (e) => {

    if(e.code === "Enter"){
    gerarQrCode()
}
})
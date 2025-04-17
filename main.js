function generateQRCode() {
    const input = document.getElementById("text-input").value;
    const qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = "";

    if (input.trim() !== "") {
      new QRCode(qrCodeContainer, {
        text: input,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    } else {
      alert("Iltimos, matn yoki URL kiriting!");
    }
  }
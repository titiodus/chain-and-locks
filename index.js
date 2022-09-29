// Declaring the variables
const idPhoto = document.getElementById("id-photo");
const nameLabel = document.getElementById("name-label");
const schoolLabel = document.getElementById("school-label");
const trackLabel = document.getElementById("track-label");
const idLabel = document.getElementById("id-label");
const myPhoto = document.getElementById("my-photo");
const fullName = document.getElementById("fullname");
const school = document.getElementById("school");
const track = document.getElementById("track");
const idNumber = document.getElementById("idNumber");
const downloadBtn = document.getElementById("download-btn");
const finePrint = document.querySelector('#fine-print');
let imgUploader = "";

// FUnction to display/hide fine print

const showFinePrint = () => {
  if(finePrint.style.display === 'none') {
    finePrint.style.display = 'block';
  }else{
    finePrint.style.display = 'none';
  }
}
showFinePrint();

// to show the image on the card 
myPhoto.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imgUploader = reader.result
    document.querySelector('#id-photo').style.backgroundImage=`url(${imgUploader})`
  });
  reader.readAsDataURL(this.files[0]);
})

// to show the value in the input field on the card
fullName.addEventListener("change", function() {
  nameLabel.innerHTML = fullName.value;
});

school.addEventListener("change", function() {
  schoolLabel.innerHTML = school.value;
});

track.addEventListener("change", function() {
  trackLabel.innerHTML = track.value;
});

idNumber.addEventListener("change", function() {
  idLabel.innerHTML = idNumber.value;
});

// // to show the value in the input field on the card
// const getInputs = () => {
//   nameLabel.innerHTML = fullName.value;
//   schoolLabel.innerHTML = school.value;
//   trackLabel.innerHTML = track.value;
//   idLabel.innerHTML = idNumber.value; 
// }
// getInputs();

// To reset the card
const resetCard = () => {
  document.querySelector('.card-info').reset();
  idPhoto.style.backgroundImage = "url('')";
  nameLabel.innerHTML = "";
  schoolLabel.innerHTML = "";
  trackLabel.innerHTML = "";
  idLabel.innerHTML = "";
  finePrint.style.display = 'none';
}
resetCard();

// // Creating the event listener for the select button
// document
//   .getElementById("select-btn")
//   .addEventListener("click", function(event) {
//     event.preventDefault();
    
    
//   });

// Function to get the card for the download 
const dwnloadCard = () => {
  html2canvas(document.querySelector(".card")).then(canvas => {
    let downloadLink = document.getElementById("download-link"); 
    downloadLink.href = canvas.toDataURL();
    downloadLink.click();
  });
}
// Function to disable the download button
function disableDownloadBtn() {
  nameLabel.innerHTML = "";
  schoolLabel.innerHTML = "";
  trackLabel.innerHTML = "";
  idLabel.innerHTML = "";
  downloadBtn.disabled = true;
};
disableDownloadBtn();

// function to enable the download button
function enableDownloadBtn() {
  downloadBtn.disabled = false;
  console.log("download button active");
  showFinePrint();
  dwnloadCard();
  resetCard(); 
};
enableDownloadBtn();

// creating the qrcode
let qrcode = new QRCode(document.getElementById("qr-code"), {
  text: "https://www.altschoolafrica.com",
  width: 150,
  height: 150,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});

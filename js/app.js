"use strict";
let submitDonation = document.getElementById("sub");
let clearData = document.getElementById("clearData");
const dataForm = document.getElementById("donationForm");

let DonationArrayInfo = [];
function Donation(DoNmae, DoAmount, DoAge) {
  this.DoNmae = DoNmae;
  this.DoAmount = DoAmount;
  this.DoAge = DoAge;

  DonationArrayInfo.push(this);
}

dataForm.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
  event.preventDefault();
  let newDonationName = document.getElementById("donatorName").value;
  let newDonationِAmount = document.getElementById("donationAmount").value;
  let newDonatorAge = randomAge(20, 60);
  console.log(newDonationName, newDonationِAmount, newDonatorAge);

  new Donation(newDonationName, newDonationِAmount, newDonatorAge);
  dataForm.reset();
  saveToLs();
}

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function saveToLs() {
  console.log("rrrrrrrrrr", DonationArrayInfo);
  localStorage.setItem("donation", JSON.stringify(DonationArrayInfo));
  retrieveFromLs();
}
function retrieveFromLs() {
  let donationData = JSON.parse(localStorage.getItem("donation"));
  for (let i = 0; i < donationData.length; i++) {
    let newDonationData =
      (donationData[i].DoNmae, donationData[i].DoAmount, donationData[i].DoAge);
  }
  //newDonationData.render(); //--------------- did not have enough time
}
clearData.addEventListener("click", clearDataFromLs);

function clearDataFromLs(event) {
  console.log("ffffffffffffffffffffffff");

  localStorage.clear();
  //render();//--------------- did not have enough time
}

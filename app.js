// Please Watch Pitch Video Or Demo Video To Understand And See Our UI!

var firstName;
var lastName;
var age;
var lastName;
var parentJob;
var dreamPet;
var favoriteFood;
var dreamJob;
var amount;
var reasons;
var loanType;
var bank;
var examID;
var scholarshipID;

onEvent("nextbutton", "click", function() {
  firstName = getText("FirstNameInput");
  lastName = getText("LastNameInput");
  age = getText("ageInput");
  lastName = getText("ageInput");
  parentJob = getText("parentJob");
  
  setText("helloBanner", "Hello " + firstName + " !");
  setScreen("signUpQuestions");
});

onEvent("submitButton", "click", function() {
  dreamPet = getText("dreamPetInput");
  favoriteFood = getText("favoriteFoodInput");
  dreamJob = getText("dreaJobInput");

  setScreen("homePage");
  
  setProperty("bgPic", "image", dreamPet);
});

onEvent("financialLoanButton", "click", function() {
  setScreen("finAidPage");
});
onEvent("counsellingButton", "click", function() {
  setScreen("counsellingPage");
});
onEvent("activitesButton", "click", function() {
  setScreen("activitiesPage");
});
onEvent("scholarshipsInternshipsButton", "click", function() {
  setScreen("scholarshipsInternshipsPage");
});
onEvent("examButton", "click", function() {
  setScreen("examPage");
});

onEvent("finLoanConfirmBtn", "click", function() {
  amount = getText("amountInput");
  reasons = getText("reasonsInput");
  loanType = getText("loanTypeInput");
  bank = getText("bankInput");
  sendInfo(amount + reasons + loanType, bank);
  setScreen("loanTUPage");
});

onEvent("examSelectBtn", "click", function() {
  examID = getText("examIDDropdown");
  setScreen("examPage" + examID);
});

onEvent("scholarshipConfirmBtn", "click", function() {
  scholarshipId = getText("scholarshipIDDropdown");
  setScreen("scholarshipPage" + scholarshipID);
});

// Please Watch Pitch Video Or Demo Video To Understand And See Our UI!

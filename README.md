var firstName;
var lastName;
var age;
var lastName;
var parentJob;
var dreamPet;
var favoriteFood;
var dreamJob;

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
  setScreen("finAidPage");
});
onEvent("activitesButton", "click", function() {
  setScreen("finAidPage");
});
onEvent("scholarshipsInternshipsButton", "click", function() {
  setScreen("scholarshipsInternshipsPage");
});
onEvent("examButton", "click", function() {
  setScreen("examPage");
});

onEvent("finLoanConfirmBtn", "click", function() {
  getText("");
  
  setScreen("loanTUPage");
});

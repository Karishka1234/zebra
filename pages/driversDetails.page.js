const { expect } = require("chai");
const testData = require("../utils/CommonConstants");
const autoInsurancePage = require("./autoInsurance.page");

class driversDetails {
    get maleGender() {return $("//div[contains(text(), 'Male')]")}
    get femaleGender() {return $("//div[contains(text(), 'Female')]")}
    get single() {return $("//div[contains(text(), 'Single')]")}
    get married() {return $("//div[contains(text(), 'Married')]")}
    get excellentScore() {return $("//div[contains(text(), 'Excellent (720+)')]")}
    get poorScore() {return $("//div[contains(text(), 'Poor (Below 580)')]")}
    get bachelorsDegree() {return $("//div[contains(text(), 'Bachelor’s degree')]")}
    get highSchool() {return $("//div[contains(text(), 'High school diploma / GED')]")}
    get moreThan3Years() {return $("//div[contains(text(), 'More than 3 years')]")}
    get lessThan6Months() {return $("//div[contains(text(), 'Less than 6 months')]")}
    get currentInsurance() {return $("//div[contains(text(), 'Select current insurance company')]")}
    get aAA() {return $("#react-select-8-option-1")}
    get injuryLimits50k100k() {return $("//div[contains(text(), '$50k / $100k')]")}
    get iDontKnow() {return $("//div[contains(text(), 'I don’t know')]")}
    get yesAccidents() {return $("//div[@data-cy='radio-text-violations-1']")}
    get noAccidents() {return $("//div[@data-cy='radio-text-violations-0']")}
    get emailLabel() {return $("label.primary-label")}
    get email() {return $("//div[@data-cy='textinput-email-0']/input[@class='form-control has-error fs-exclude']")}
    get yesWantToSaveInfo() {return $("//div[@data-cy='radio-text-is_interested_in_account-0-true']")}
    get noWantToSaveInfo() {return $("//div[@data-cy='radio-text-is_interested_in_account-0-false']")}
    get employedFullTime() {return $("//div[contains(text(), 'Employed full time')]")}
    get payInFull() {return $("//div[contains(text(), 'Pay in full at start of policy')]")}
    get howDidHearAboutUs() {return $("//div[contains(text(), 'Select how you heard about us')]")}
    get facebookAd() {return $("#react-select-3-option-1")}
    get yesAnotherDriver() {return $("//div[@data-cy='radio-text-addAnother-driver-1-1']")}
    get noAnotherDriver() {return $("//div[@data-cy='radio-text-addAnother-driver-1-0']")}
    get saveAndContinueButton() {return $("//a[@data-cy='section-continue']/span")}
    
   /**
   * fill out fields
   */
  fillOutFields() {
    this.femaleGender.waitForDisplayed();
    autoInsurancePage.clickOnWebElement(this.femaleGender);
    autoInsurancePage.clickOnWebElement(this.single);
    autoInsurancePage.clickOnWebElement(this.excellentScore);
    autoInsurancePage.clickOnWebElement(this.bachelorsDegree);
    autoInsurancePage.clickOnWebElement(this.moreThan3Years);
    autoInsurancePage.clickOnWebElement(this.currentInsurance);
    autoInsurancePage.clickOnWebElement(this.aAA);
    autoInsurancePage.clickOnWebElement(this.injuryLimits50k100k);
    autoInsurancePage.clickOnWebElement(this.noAccidents);
    this.email.setValue(testData.email);
    autoInsurancePage.clickOnWebElement(this.yesWantToSaveInfo);
    autoInsurancePage.clickOnWebElement(this.employedFullTime);
    autoInsurancePage.clickOnWebElement(this.howDidHearAboutUs);
    autoInsurancePage.clickOnWebElement(this.facebookAd);
    autoInsurancePage.clickOnWebElement(this.noAnotherDriver);
    this.saveAndContinueButton.waitForDisplayed();
    autoInsurancePage.clickOnWebElement(this.saveAndContinueButton);
  }
}
module.exports = new driversDetails();
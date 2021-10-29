const { expect } = require("chai");
const testData = require("../utils/CommonConstants");
const autoInsurancePage = require("./autoInsurance.page");

class driversSelect {
    get firstName() {return $("#first_name-0")}
    get lastName() {return $("#last_name-0")}
    get bday() {return $("#date_of_birth-0")}
    get address() {return $("#garaging_address")}
    get unitNumber() {return $("#unit")}
    get city() {return $("#city")}
    get selectState() {return $("#dropdown-input-state")}
    get zipCode() {return $("#zipcode")}
    get saveAndContinueButton() {return $("//a[@data-cy='section-continue']/span")}

   /**
   * enter driver's information
   */
  enterInfo(text1, text2, text3, text4) {
    this.firstName.waitForDisplayed();
    autoInsurancePage.clickOnWebElement(this.firstName);
    this.firstName.setValue(text1);
   // this.firstName.keys("Enter");
    autoInsurancePage.clickOnWebElement(this.lastName);
    this.lastName.setValue(text2)
    autoInsurancePage.clickOnWebElement(this.bday);
    this.bday.setValue(text3)
    autoInsurancePage.clickOnWebElement(this.address);
    this.address.setValue(text4);
    autoInsurancePage.clickOnWebElement(this.saveAndContinueButton);
  }

}
module.exports = new driversSelect();
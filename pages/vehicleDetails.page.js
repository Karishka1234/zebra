const { expect } = require("chai");
const testData = require("../utils/CommonConstants");
const autoInsurancePage = require("./autoInsurance.page");
const autoInsuranceStartPage = require("../pages/autoInsuranceStart.page");

class vehicleDetails {
    get ownMakingPayments() {return $("//div[contains(text(), 'Own—making payments')]")}
    get lease() {return $("//div[contains(text(), 'Lease')]")}
    get personalCommuting() {return $("//div[contains(text(), 'Personal/commuting')]")}
    get frequency() {return $("//div[contains(text(), 'Frequency')]")}
    get estimatedMileage() {return $("//input[@placeholder='Miles']")}

   /**
   * fill fields
   */
  fillOutFields(text1, text2, text3) {
    this.ownMakingPayments.waitForDisplayed();
    autoInsurancePage.clickOnWebElement(text1);
    autoInsurancePage.clickOnWebElement(text2);
    autoInsurancePage.clickOnWebElement(this.estimatedMileage);
    this.estimatedMileage.setValue(text3);
    autoInsurancePage.clickOnWebElement(autoInsuranceStartPage.saveAndContinueButton);
  }
}

module.exports = new vehicleDetails();
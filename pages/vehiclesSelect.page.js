const { expect } = require("chai");
const testData = require("../utils/CommonConstants");
const autoInsurancePage = require("./autoInsurance.page");

class vehicleSelect {
    get selectVehicleYear() {return $("//div[contains(text(), 'Select vehicle year')]")}
    get selectVehicleMake() {return $("//div[contains(text(), 'Select vehicle make')]")}
    get selectVehicleModel() {return $("//div[contains(text(), 'Select vehicle model')]")}
    get selectVehicleTrim() {return $("//div[contains(text(), 'Select vehicle trim')]")}
    get addAnotherVehicle() {return $("//div[contains(text(), 'Yes, add another vehicle.')]")}
    get vehicle2021() {return $("react-select-2-option-1")}
    get vehicleAudi() {return $("#react-select-3-option-2")}
    get vehicleA5() {return $("#react-select-4-option-2")}
    get vehicleAudiPrestige() {return $("#react-select-5-option-5")}
    get saveAndContinueButton() {return $("//a[@data-cy='section-continue']/span")}

   /**
   * fill fields
   */
  fillOutFields(text1, text2, text3, text4) {
    this.selectVehicleYear.waitForDisplayed();
    this.selectVehicleModel.waitForDisplayed();
    autoInsurancePage.clickOnWebElement(text1);
    autoInsurancePage.clickOnWebElement(text2);
    autoInsurancePage.clickOnWebElement(text3);
    autoInsurancePage.clickOnWebElement(text4);
    this.saveAndContinueButton.waitForDisplayed();
    autoInsurancePage.clickOnWebElement(this.saveAndContinueButton);
  }
}
module.exports = new vehicleSelect();
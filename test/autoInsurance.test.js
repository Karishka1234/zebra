const { expect } = require("chai");
const autoInsurancePage = require("../pages/autoInsurance.page");
const autoInsuranceStartPage = require("../pages/autoInsuranceStart.page");
const driversDetailsPage = require("../pages/driversDetails.page");
const driversSelectPage = require("../pages/driversSelect.page");
const vehicleDetailsPage = require("../pages/vehicleDetails.page");
const vehiclesSelectPage = require("../pages/vehiclesSelect.page");
const coverageSelectionPage = require("../pages/coverageSelection.page");
const testData = require("../utils/CommonConstants");
const rateSelectPage = require("../pages/rateSelect.page");

describe("All the test belong to Auto Insurance page", () => {

  //*********************UI TESTS FOR Auto Insurance page*********************//
  it("Verify that logo, headers, login icon, phone link are present on the page", () => {
    browser.maximizeWindow();
    browser.navigateTo(testData.url);
    expect(autoInsurancePage.zebraLogo.isDisplayed()).equal(true);
    autoInsurancePage.verifyExpectedTextWithElementText(testData.zebraLogo, autoInsurancePage.zebraLogo);

    expect(autoInsurancePage.compareHeader.isDisplayed()).equal(true);
    autoInsurancePage.verifyExpectedTextWithElementText(testData.compareHeader, autoInsurancePage.compareHeader);

    expect(autoInsurancePage.toolAndTipsHeader.isDisplayed()).equal(true);
    autoInsurancePage.verifyExpectedTextWithElementText(testData.toolAndTipsHeader, autoInsurancePage.toolAndTipsHeader);

    expect(autoInsurancePage.companyHeader.isDisplayed()).equal(true);
    autoInsurancePage.verifyExpectedTextWithElementText(testData.companyHeader, autoInsurancePage.companyHeader);

    expect(autoInsurancePage.logInIcon.isDisplayed()).equal(true);
    autoInsurancePage.verifyExpectedTextWithElementText(testData.logInIcon, autoInsurancePage.logInIcon);

    expect(autoInsurancePage.ourAgentsCanHelp.isDisplayed()).equal(true);
    autoInsurancePage.verifyExpectedTextWithElementText(testData.ourAgentsCanHelp, autoInsurancePage.ourAgentsCanHelp);

    expect(autoInsurancePage.phoneLink.isDisplayed()).equal(true);
    autoInsurancePage.verifyExpectedTextWithElementText(testData.phoneLink, autoInsurancePage.phoneLink);

  });

  it("Verify that insurance companies icons, compare car insurance text, zip code placeholder, start button are present on the page", () => {
    expect(autoInsurancePage.insuranceCompanies.isDisplayed()).equal(true);

    expect(autoInsurancePage.compareCarInsurance.isDisplayed()).equal(true);
    autoInsurancePage.verifyExpectedTextWithElementText(testData.compareCarInsurance, autoInsurancePage.compareCarInsurance);

    expect(autoInsurancePage.zipCodeFirst.isDisplayed()).equal(true);
    autoInsurancePage.verifyExpectedTextWithElementText(testData.zipCode, autoInsurancePage.zipCodeText);

    expect(autoInsurancePage.startButtonFirst.isDisplayed()).equal(true);
    autoInsurancePage.verifyExpectedTextWithElementText(testData.startButton, autoInsurancePage.startButtonFirst);
  });

  //*********************FUNCTIONAL TESTS FOR Auto Insurance page**********************//
  it("Get insurance rates", () => {
    autoInsurancePage.enterZipCode();
    autoInsuranceStartPage.yesRadioButton.waitForDisplayed();
    autoInsuranceStartPage.answer3Questions(autoInsuranceStartPage.yesRadioButton, autoInsuranceStartPage.iOwnMyCondo, autoInsuranceStartPage.iThinkImPayingTooMuch);
    autoInsurancePage.assertUrlValue(testData.urlCarStart);
    autoInsurancePage.clickOnWebElement(autoInsurancePage.saveAndContinueButton);
    vehiclesSelectPage.fillOutFields(vehiclesSelectPage.vehicle2021, vehiclesSelectPage.vehicleAudi, vehiclesSelectPage.vehicleA5, vehiclesSelectPage.vehicleAudiPrestige);
    vehicleDetailsPage.fillOutFields(vehicleDetailsPage.ownMakingPayments, vehicleDetailsPage.personalCommuting, testData.estimatedMileage);
    driversSelectPage.enterInfo(testData.firstName, testData.lastName, testData.bday, testData.address);
    driversDetailsPage.fillOutFields();
    autoInsurancePage.clickOnWebElement(coverageSelectionPage.best);
    rateSelectPage.setReminder();
    autoInsurancePage.clickOnWebElement(rateSelectPage.quote);
  });
});
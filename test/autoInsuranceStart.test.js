const { expect } = require("chai");
const autoInsurancePage = require("../pages/autoInsurance.page");
const autoInsuranceStartPage = require("../pages/autoInsuranceStart.page");
const testData = require("../utils/CommonConstants");

describe("All the test belong to Auto Insurance Satrt page", () => {

  //*********************UI TESTS FOR Auto Insurance Start page*********************//
  it("Verify that logo, giggy, shield, no spam images, radio buttons and elements are present on the page", () => {
    browser.navigateTo(testData.urlForStart);
    
    expect(autoInsuranceStartPage.zebraLogo.isDisplayed()).equal(true);
    expect(autoInsuranceStartPage.doYouCurrentlyHaveInsurance.isDisplayed()).equal(true);
    expect(autoInsuranceStartPage.whyAreYouShoppingToday.isDisplayed()).equal(true);
    expect(autoInsuranceStartPage.yesRadioButton.isDisplayed()).equal(true);
    expect(autoInsuranceStartPage.noRadioButton.isDisplayed()).equal(true);

    expect(autoInsuranceStartPage.piggyBankImg.isDisplayed()).equal(true);
    expect(autoInsuranceStartPage.shieldImg.isDisplayed()).equal(true);
    expect(autoInsuranceStartPage.noSpamImg.isDisplayed()).equal(true);
  });
});
const { expect } = require("chai");
const testData = require("../utils/CommonConstants");

class autoInsurance {
    get zebraLogo() { return $("a.header-brand") }
    get compareHeader() {return $("//span[contains(text(), 'Compare')]")}
    get toolAndTipsHeader() {return $("//span[contains(text(), 'Tools & Tips')]")}
    get companyHeader() {return $("//span[contains(text(), 'Company')]")}
    get logInIcon() {return $("//span[contains(text(), 'Log-in')]")}
    get ourAgentsCanHelp() {return $("div.header-nav-cta span.header-nav-cta-text")}
    get phoneLink() {return $("a.cta-phone span.cta-phone-display")}
    get insuranceCompanies() {return $("//img[@alt='Insurance companies']")}
    get compareCarInsurance() {return $("h1.hero-headline")}
    get zipCodeFirst() {return $("(//input[@autocomplete='postal-code'])[1]")}
    get zipCodeText() {return $("(//label[contains(text(), 'ZIP code')])[1]")}
    get startButtonFirst() {return $("(//span[@class='btn-text hidden-sm-down'][contains(text(), 'Start')])[1]")}
    get saveAndContinueButton() {return $("//a[@data-cy='section-continue']/span")}

 /**
  * verifying text of the element with expected text
  */
  verifyExpectedTextWithElementText(expectedText, locator) {
    locator.waitForDisplayed();
    expect(locator.getText()).equal(expectedText);
  }

   /**
  * getting insurance rates
  */
  enterZipCode() {
    this.clickOnWebElement(this.zipCodeFirst);
    this.zipCodeFirst.setValue(testData.zipCodeForRates);
    this.clickOnWebElement(this.startButtonFirst);
  }

  /**
  * @returns return the current URL to verify with expected URL
  */
  getURL() {
    return browser.getUrl();
  }

  /**
   * @param {String} text is the current URL to compare it with expected URL
   */
  assertUrlValue(text) {
    return expect(this.getURL()).contains(text);
  }

  /**
   * Click on web element
   * @param {} element 
   */
  clickOnWebElement(element) {
    element.waitForDisplayed();
    element.click();
  }

}
module.exports = new autoInsurance();
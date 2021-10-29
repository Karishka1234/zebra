const { expect } = require("chai");
const testData = require("../utils/CommonConstants");
const autoInsurancePage = require("./autoInsurance.page");
const vehiclesSelectPage = require("./vehiclesSelect.page");

class autoInsuranceStart {
    get doYouCurrentlyHaveInsurance() {return $("//h4[contains(text(), 'Do you currently have')]")}
    get doYouOwnOrRent() {return $("//h4[contains(text(), 'Do you own or rent your home?')]")}
    get whyAreYouShoppingToday() {return $("//h4[contains(text(), 'Why are you shopping for insurance today?')]")}
    get yesRadioButton() {return $("//div[@data-cy='radio-text-currently_insured-0-1']")}
    get noRadioButton() {return $("//div[@data-cy='radio-text-currently_insured-0-0']")}
    get iOwnMyHome() {return $("//div[contains(text(), 'I own my home')]")}
    get iOwnMyCondo() {return $("//div[contains(text(), 'I own my condo')]")}
    get iRent() {return $("//div[contains(text(), 'I rent')]")}
    get otherOption() {return $("//div[contains(text(), 'Other)]")}
    get iOwnMyHome() {return $("//div[contains(text(), 'I own my home')]")}
    get iThinkImPayingTooMuch() {return $("//div[contains(text(), 'I think I’m paying too much')]")}
    get imBuyingCarSoon() {return $("//div[contains(text(), 'I’m buying a car soon')]")}
    get saveAndContinueButton() {return $("//a[@data-cy='section-continue']/span")}
    get noSpamImg() {return $("//img[@alt='No spam sign illustration']")}
    get shieldImg() {return $("//img[@alt='Shields illustration']")}
    get piggyBankImg() {return $("//img[@alt='Piggy bank illustration']")}
    get zebraLogo() {return $("//img[@alt='The Zebra logo']")}

    answer3Questions(question1, question2, question3) {
        autoInsurancePage.clickOnWebElement(question1);
        autoInsurancePage.clickOnWebElement(question2);
        autoInsurancePage.clickOnWebElement(question3);
        autoInsurancePage.clickOnWebElement(this.saveAndContinueButton);
    }
}
module.exports = new autoInsuranceStart();

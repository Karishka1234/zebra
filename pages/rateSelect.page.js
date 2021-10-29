const { expect } = require("chai");
const testData = require("../utils/CommonConstants");
const autoInsurancePage = require("./autoInsurance.page");

class rateSelect {
    get amount() {return $("span.amount']")}
    get selectReminder() {return $("//label[contains(text(), 'Select reminder')]")}
    get setReminder() {return $("//button[contains(text(), 'Set reminder')]")}
    get set3daysReminder() {return $("#set-reminder-3 days")}
    get reminderSuccessText() {return $("p.reminder-set-msg")}
    get buyOnline() {return $("//span[contains(text(), 'Buy Online Now')]")}
    get callToBuy() {return $("//span[contains(text(), 'Call to buy')]")}
    get phoneNumber() {return $("//span[contains(text(), '<(866) 579-7657')]")}
    get changeCoverage() {return $("//button[contains(text(), 'Change coverage')]")}
    get backToQuotes() {return $("//span[contains(text(), 'Back to quotes')]")}
    get quote() {return $("//span[contains(text(), 'Get quote')]")}

 /**
   * set Reminder
   */
  setReminder() {
    this.selectReminder.waitForDisplayed();
    autoInsurancePage.clickOnWebElement(this.selectReminder);
    autoInsurancePage.clickOnWebElement(this.set3daysReminder);
    autoInsurancePage.clickOnWebElement(this.setReminder);
    expect(this.reminderSuccessText.isDisplayed()).equal(true);
  }
}
module.exports = new rateSelect();
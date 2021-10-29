const { expect } = require("chai");
const testData = require("../utils/CommonConstants");
const autoInsurancePage = require("./autoInsurance.page");

class coverageSelection {
    get basic() {return $("//button[@data-cy='show-quotes-basic']")}
    get better() {return $("//button[@data-cy='show-quotes-better']")}
    get best() {return $("//button[@data-cy='show-quotes-best']")}

}
module.exports = new coverageSelection();
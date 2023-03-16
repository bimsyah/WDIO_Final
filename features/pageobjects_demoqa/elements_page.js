const { expect } = require('chai');
const Page = require('./page');

class ElementsPage extends Page {

    get btnButtons () {
        return $(`.show li:nth-of-type(5)`);
    }

    get btnClickMe () {
        return $(`//button[text()="Click Me"]`);
    }

    get btnRightClickMe () {
        return $(`//button[text()='Right Click Me']`);
    }

    get btnDoubleClickMe () {
        return $(`//button[text()='Double Click Me']`);
    }

    get cmmndClick () {
        return $(`#dynamicClickMessage`)
    }

    get cmmndRight () {
        return $(`#rightClickMessage`)
    }

    get cmmndDouble() {
        return $(`#doubleClickMessage`)
    }
    
    async clickButtons() {
        await (await this.btnButtons).click();
    }
   
    async clickClickMe() {
        await this.btnClickMe.click();        
    }

    async assertCommandClick () {
        const text = await this.cmmndClick.isDisplayed()
        expect(text).to.equal(true)
    }

    async assertCommandRight () {
        const text = await this.cmmndRight.isDisplayed()
        expect(text).to.equal(true);
    }

    async assertcommandDouble () {
        const text = await this.cmmndDouble.isDisplayed()
        expect(text).to.equal(true);
    }

    async clickRightClick() {
        await this.btnRightClickMe.click({ button: 'right' });   
    }

    async clickDoubleClick() {
        await this.btnDoubleClickMe.doubleClick();    }

    open() {
        return super.open();
    }
    
}

module.exports = new ElementsPage
const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

const ElementsPage = require('../pageobjects_demoqa/elements_page.js');
const HomePage = require('../pageobjects_demoqa/homepage.js');
const InteractionsPage = require('../pageobjects_demoqa/interactions_page.js');


Given('I am on the front page', async () => {
    await HomePage.open()
});

When('I click the elements menu', async () => {
    await browser.scroll(0,150)
    await HomePage.clickElements()
  // Write code here that turns the phrase above into concrete actions
})

When('I click the buttons menu', async () => {
    await browser.scroll(0, 100)
    await ElementsPage.clickButtons()
  // Write code here that turns the phrase above into concrete actions
})

When('I single click on click me', async () => {
    await ElementsPage.clickClickMe()
  // Write code here that turns the phrase above into concrete actions
})
Then('I should see the command a dynamic click', async () => {
  await ElementsPage.assertCommandClick()
  
  // Write code here that turns the phrase above into concrete actions
})

When('I click right click', async () => {
  await ElementsPage.clickRightClick();
  // Write code here that turns the phrase above into concrete actions
})

Then('I should see the command a right click', async () => {
  await ElementsPage.assertCommandRight()

  // Write code here that turns the phrase above into concrete actions
})

When('I click double click', async () => {
  await ElementsPage.clickDoubleClick();
  // Write code here that turns the phrase above into concrete actions
})

Then('I should see the command a double click', async () => {
  await ElementsPage.assertcommandDouble()

  // Write code here that turns the phrase above into concrete actions
})

When('I click the interactions menu', async () => {
  await browser.scroll(0,200)
  await HomePage.clickInteractions()
  // Write code here that turns the phrase above into concrete actions
})

Then('I scroll down the page', async () => {
  await browser.execute('window.scrollBy(0,900)')
  // Write code here that turns the phrase above into concrete actions
})

When('I click the droppable menu', async () => {
  await InteractionsPage.clickDroppable()
  // Write code here that turns the phrase above into concrete actions
})


When('I drag and drop the Drag me box into the Drop Here box', async () => {
  // await browser.scroll(850, 100)
  await InteractionsPage.dragMeBox()
  // Write code here that turns the phrase above into concrete actions
})

Then('I should see the background-color of Drop Here box changed', async () => {
  await InteractionsPage.dropBoxHere()
  // Write code here that turns the phrase above into concrete actions
})







// Then('Show the command a dynamic click', async () => {
//   await ElementsPage.showCommandClikMe()
//   // Write code here that turns the phrase above into concrete actions
// })



const puppeteer = require('puppeteer')


// puppeteer.defaultArgs(['--no-sandbox', '--disable-setuid-sandbox'])

module.exports = async url => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.goto(url)

  const playButton = await page.$('.button-play')
  playButton.click()

  const shuffleButton = await page.$('.player-controls__btn_shuffle')
  shuffleButton.click()

  const nextButton = await page.$('.player-controls__btn_next')
  nextButton.click()
}
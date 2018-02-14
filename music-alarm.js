const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.goto('https://music.yandex.ru/album/2214/track/17307')

  const playButton = await page.$('.button-play')
  playButton.click()

  const shuffleButton = await page.$('.player-controls__btn_shuffle')
  shuffleButton.click()

  const nextButton = await page.$('.player-controls__btn_next')
  nextButton.click()
})()
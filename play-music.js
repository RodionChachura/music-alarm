const puppeteer = require('puppeteer')

const playMusic = async url => {
  const browser = await puppeteer.launch({ headless: false })
  try {
    const page = await browser.newPage()
    page.setViewport({ width: 1920, height: 1080})
    await page.goto(url)
    const playButton = await page.$('.button-play')
    playButton.click()

    const shuffleButton = await page.$('.player-controls__btn_shuffle')
    shuffleButton.click()

    const nextButton = await page.$('.player-controls__btn_next')
    nextButton.click()
  } catch(err) {
    browser.close()
    throw err
  }
}

const playMusicWithHandle = async (url, attempt = 0) => {
  if (attempt < 5) {
    try {
      await playMusic(url)
    } catch(_) {
      await new Promise(res => setTimeout(res, 5000))
      await playMusicWithHandle(url, attempt + 1)
    }
  }
}

module.exports = playMusicWithHandle
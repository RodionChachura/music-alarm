const shell = require('shelljs')

const playMusic = require('./play-music')

const time = process.argv[2] || '8:0'
const [hours, minutes] = time.split(':').map(i => parseInt(i, 10))
const url = process.argv[3] || 'https://music.yandex.ru/album/2214/track/17307'

shell.exec(`sudo rtcwake -m mem -s ${(hours * 60 + minutes) * 60} && node -e "require('./play-music')('${url}')"`)


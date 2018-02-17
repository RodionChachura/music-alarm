const shell = require('shelljs')

const time = process.argv[2] || '8:0'
const [hours, minutes] = time.split(':').map(i => parseInt(i, 10))
const url = process.argv[3] || 'https://music.yandex.ru/users/RodionChachura/playlists/1001'

shell.exec(`sudo rtcwake -m mem -s ${(hours * 60 + minutes) * 60} && node -e "require('./play-music')('${url}')"`)


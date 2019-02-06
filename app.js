const crypto = require('crypto-browserify');
const header = {
    "typ": "JWT",
    "alg": "HS256"
};

const payload = {
    "userId": "radlohead",
    "username": "minho",
    "email": "radlohead@naver.com",
    "createAt": "20190206184100"
}

const encodedHeader = new Buffer.from(JSON.stringify(header))
    .toString('base64')
    .replace('=', '');
const encodedPayload = new Buffer.from(JSON.stringify(payload))
    .toString('base64')
    .replace('=', '');
const signature = crypto.createHmac('sha256', 'secret')
    .update(encodedHeader + '.' + encodedPayload)
    .digest('base64')
    .replace('=', '');
    
console.log(`${encodedHeader}.${encodedPayload}.${signature}`);
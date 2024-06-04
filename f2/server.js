"use strict";
const webpush = require("web-push");

const vapidKeys= webpush.generateVAPIDKeys();
console.log(vapidKeys.publicKey); //BOU2glZ3G8NQQKoRY8Kh8Jniw-TH_sHBPOP9fUh9L9kk8WMZfshqtCVwcR2TiV9zbcYbUEbuK7HQLscilWSXldg
console.log(vapidKeys.privateKey);//A0fZDif6o05FBBbgu_zSlj1Xy7qY5zt4iuafa9WhuxU 

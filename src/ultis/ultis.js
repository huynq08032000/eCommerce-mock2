const moment = require('moment')
export const access_token = 'access_token'
export const refresh_token = 'refresh_token'
export const access_token_time = 'access_token_time'
export const refresh_token_time = 'refresh_token_time'
export const deviceId = 'deviceId'

export const findIndex = (arr, payload) => {
    return arr.findIndex(el => el.id === payload.id)
}
export const numInArray = (num, arr) => {
    if (arr) {
        const found = arr?.find(element => element === num);
        return found ? true : false
    }
    return false;
}
export const countSubtotal = (arr) => {
    let subtotal = 0;
    arr.forEach(el => {
        subtotal += el.quantity * el.price
    })
    return subtotal;
}
export const modifyLetter = (str) => {
    const tmpString = str.toLowerCase()
    return tmpString.charAt(0).toUpperCase() + tmpString.slice(1);
}

export const regexEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regexContact = /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/
export const regexStock = '^[1-9]+[0-9]*$|0'
export const b64EncodeUnicode = (str) => window.btoa(str)

// window.btoa(

//     encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) =>

//         String.fromCharCode(parseInt(p1, 16))

//     )

// );
export const modifyTime = (string) => {
    return moment(string).format('DD MMM, YYYY')
}

export const modifyTimeOrderTable = (string) => {
    return moment(string).format('DD/MM/YYYY')
}


// Decoding base64 ⇢ UTF8

export const b64DecodeUnicode = (str) => window.atob(str)

// decodeURIComponent(

//     Array.prototype.map

//         .call(

//             window.atob(str),

//             (c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`

//         )

//         .join("")

// );

export const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, b64EncodeUnicode(value))
}
export const getLocalStrogageByKey = (key) => {
    if (localStorage.getItem(key) === undefined) return ''
    return b64DecodeUnicode(localStorage.getItem(key))
}
export const clearLocalStorage = () => {
    const key = [access_token, access_token_time, refresh_token, refresh_token_time, deviceId]
    key.forEach(el => setLocalStorageKey(el, ''))
}
export const isExpried = (time) => {
    const current = moment()
    const timeExpried = moment(time)
    return timeExpried.isAfter(current)
}
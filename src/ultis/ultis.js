export const modifyLetter = (str) => {
    const tmpString = str.toLowerCase()
    return tmpString.charAt(0).toUpperCase() + tmpString.slice(1);
}

export const regexEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const b64EncodeUnicode = (str) =>

    window.btoa(

        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) =>

            String.fromCharCode(parseInt(p1, 16))

        )

    );



// Decoding base64 ⇢ UTF8

export const b64DecodeUnicode = (str) =>

    decodeURIComponent(

        Array.prototype.map

            .call(

                window.atob(str),

                (c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`

            )

            .join("")

    );
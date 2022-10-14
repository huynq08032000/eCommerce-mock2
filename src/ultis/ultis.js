export const modifyLetter = (str) => {
    const tmpString = str.toLowerCase()
    return tmpString .charAt(0).toUpperCase() + tmpString .slice(1);
}

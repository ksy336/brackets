module.exports = function check(str, bracketsConfig) {
    let strToArr = str.split('');
    for (let i = 0; i < strToArr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            let openBracket = strToArr[i] === bracketsConfig[j][0];
            let closeBracket = strToArr[i + 1] === bracketsConfig[j][1];
            if(openBracket && closeBracket === true) {
                strToArr.splice(i, 2);
                i = -1;
            }
        }
    }
    return strToArr.length === 0;


}


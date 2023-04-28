const romanInput = document.getElementById('roman__input');
const arabicInput = document.getElementById('arabic__input');

arabicInput.addEventListener('input', function () {
    if (arabicInput.value > 3999)
        arabicInput.value = 3999;

    if (arabicInput.value < 1)
        arabicInput.value = 1;  

    romanInput.value = convertToRoman(arabicInput.value)
});

romanInput.addEventListener('input', function () {
    arabicNum = convertToArabic(romanInput.value.toUpperCase());

    if (arabicNum > 3999) {
        arabicNum = 3999;
        romanInput.value = "MMMCMXCIX";
    }
        
    if (arabicNum < 1) {
        arabicNum = 1;
        romanInput.value = "I";
    }
        
    arabicInput.value = arabicNum
});

function convertToRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romanNum = "";

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            romanNum += key;
            num -= romanNumerals[key];
        }
    }

    return romanNum;
}

function convertToArabic(romanNum) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let arabicNum = 0;

    for (let i = 0; i < romanNum.length; i++) {
        const currentNum = romanNumerals[romanNum[i]];
        const nextNum = romanNumerals[romanNum[i + 1]];
        if (nextNum && currentNum < nextNum) {
            arabicNum -= currentNum;
        } else {
            arabicNum += currentNum;
        }
    }

    if (!arabicNum)
        arabicNum = ""

    return arabicNum;
}
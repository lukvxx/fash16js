    function isNumeric(s) {
        return !isNaN(s - parseFloat(s));
    }

    function fash16(text) {
        let value = text.length;
        for(let i = 0; i < text.length; i++) {
            if(value <= text.charCodeAt(i)) {
                value *= (text.charCodeAt(i));
            } else {
                value /= (text.charCodeAt(i));
            }
        }
        value = value*10000000000000000;
        value = value.toString(16);
        result = value;
        for(let g = 0; g < value.length; g++) {
            if(isNumeric(value[g])) {
                result = result + value[g];
            } else {
                result = value[g] + result;
            }
        }
        //result = result*10000000000000000000;
        //result = result.toString(16);
        result = result.substring(0,16);
        return result;
    }

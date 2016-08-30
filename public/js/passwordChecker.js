
//PASSWORD MATCH FUNCTION
function passwordMatch(password1Id, password2Id){

    //assign variables
    var p1 = '#' + password1Id;
    var p2 = '#' + password2Id;
    var result = false;

    //password match check
    if($(p1).val() == $(p2).val()){

        //change result
        result = true;
    }

    //return value
    return result;
}

//PASSWORD LENGTH FUNCTION
function passwordMinMaxLength(password, min, max){

    //assign variables
    var p = '#' + password;
    var pVal = $(p).val();
    var result = true;

    //min check
    if(min != '' && max.length == ''){

        //assign variables
        result = false;

        if($(p).val().length >= min){

            //change result
            result = true;
        }

        //return value
        return result;
    }

    //max check
    if(max != '' && min.length == ''){

        //assign variables
        result = false;

        if($(p).val().length <= max){

            //change result
            result = true;
        }

        //return value
        return result;
    }

    //min and max check
    if(max != '' && min != ''){

        //assign variables
        result = false;

        if($(p).val().length <= max && $(p).val().length >= min){

            //change result
            result = true;
        }

        //return value
        return result;
    }
}

//PASSWORD INCLUDES LETTERS AND NUMBERS FUNCTION
function checkIncludesLettersAndNumbers(password){

    //assign variables
    var p = '#' + password;
    var pVal = $(p).val();
    var result = false;

    if (/[a-zA-Z]/.test(pVal) && /[0-9]/.test(pVal)) {
        //change result
        result = true;
    }

    //return value
    return result;
}
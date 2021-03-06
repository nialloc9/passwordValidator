$(document).ready(function(){

    //bind event handlers
    $('#password1, #password2').bind('keyup change', function(){

        //step 1: password match check
        if(passwordMatch('password1', 'password2')){

            //step 2: password min and max length check
            if(passwordMinMaxLength('password1', 8, 15)){

                //step 3: password includes letters and numbers check
                if(checkIncludesLettersAndNumbers('password1')){
                    //add info and enable button
                    $('#myButton').removeAttr('disabled');
                    $('#info').text('Awesome stuff');
                }else{
                    //add info and disable button
                    $('#info').text('Password must have letters and numbers in it.');
                    $('#myButton').attr('disabled', 'disabled');
                }
            }else{
                //add info and disable button
                $('#info').text('Password must be between 8 and 15 characters in length.');
                $('#myButton').attr('disabled', 'disabled')
            }
        }else{
            //add info and disable button
            $('#info').text('Passwords do not match');
            $('#myButton').attr('disabled', 'disabled')
        }
    });
});
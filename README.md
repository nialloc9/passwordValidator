# passwordValidator
This is password checker with the aim to reuse. It is to be used when the user is creating an acccount. It can be used together to check passwords match, password length, and that passwords include a letter and a number. Or it can be used separately by just calling the function you want.


# Instructions
1. Make sure jQuery is available to use in your project.
2. Include the public/js/passwordValidator.js file in your project.
3. Call any of the functions below or a combitnation if you want. The functions below all return true if successful and false if not.

# passwordMatch(password1Id, password2Id) Parameters

password1Id: id of first password input.

password2Id: id of second password input to check if it matches password1Id input.


# passwordMinMaxLength(passwordId, min, max) Parameters

passwordId: the id of the password to check

min: (optional: if not using use '' instead) the min length allowed for the password.

max: (optional: if not using use '' instead) The max length allowed for the password


# checkIncludesLettersAndNumbers(passwordId) Parameters

passwordId: the id of the password to check


# Example
      <script>
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
    </script>
        
# NB
If you are checking 2 passwords match do this first before you check the length and that the password includes letters and numbers.

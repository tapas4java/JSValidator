/****************************************************************
* Name    : Validator Framework
* Author  : Tapas Jena
* Purpose : This framework will provide all the required validations throughout the application.
*           e.g. - validate.minLength("MyText", 5)
*                - validate.validEmail("xyz@gmail.com")
*                - validate.validPAN("AKNPJ5811E")
****************************************************************/

/*
 * Define the regular expressions that will be used for validation.
 * If you want to change the behaviour, change the Regex accordingly here.
 */
var	numericRegex = /^[0-9]+$/;
var	integerRegex = /^\-?[0-9]+$/;
var	decimalRegex = /^\-?[0-9]*\.?[0-9]+$/;
var	emailRegex = /^[\_]*([a-z0-9]+(\.|\_*)?)+@([a-z][a-z0-9\-]+(\.|\-*\.))+[a-z]{2,6}$/i;
var	alphaRegex = /^[a-z]+$/i;
var	alphaNumericRegex = /^[a-z0-9]+$/i;
var	alphaDashRegex = /^[a-z0-9_\-]+$/i;
var	ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i;
var	base64Regex = /[^a-zA-Z0-9\/\+=]/i;
var	numericDashRegex = /^[\d\-\s]+$/;
var	urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
var phoneRegex = /^((\+?91\s?-?)|0)?[0-9]{10}$/;
var aadhaarRegex = /^\d{12}$/;
var panRegex = /^[a-z]{5}\d{4}[a-z]{1}$/i;
var usernameRegex = /^[\w\d\_\.]{6,}$/;
var passwordRegex = /^.{6,}$/;

/*
 * All validation rules matching logic are here
 */
validator = {
	
	/**
	 * This function will validate weather provided text is blank or not
	 * @param argText
	 * @returns boolean 
	 */
    required: function( argText ) {
        return (argText !== null && argText !== '' && argText !== "");
    },

	/**
	 * This function will validate weather provided email is valid or not
	 * - Alphanumeric before @
	 * - Only _(underscore) and .(dot) allowed before @
	 * - @ is mandatory
	 * - After @, .(dot) is mandatory
	 * - After .(dot), 2 alphabet mandatory(no alphabet)
	 * - Valid Formats:
	 *	 tapas.jena@gmail.com
	 *	 sudhir_chitrala@kony.com
	 * 
	 * @param argEmail
	 * @returns boolean
	 */
    validEmail: function( argEmail ) {
        return emailRegex.test(argEmail);
    },

	/**
	 * This function will validate weather provided text is of minimum length or not
	 * @param argText
	 * @param argLength
	 * @returns boolean 
	 */
    minLength: function( argText, argLength ) {
        if (!numericRegex.test(argLength)) {
            return false;
        }

        return (argText.length >= parseInt(argLength, 10));
    },

	/**
	 * This function will validate weather provided text is of maximum length or not
	 * @param argText
	 * @param argLength
	 * @returns boolean
	 */
    maxLength: function( argText, argLength ) {
        if (!numericRegex.test(argLength)) {
            return false;
        }

        return (argText.length <= parseInt(argLength, 10));
    },

	/**
	 * This function will validate weather provided text is of exact length or not
	 * @param argText
	 * @param argLength
	 * @returns boolean 
	 */
    exactLength: function( argText, argLength ) {
        if (!numericRegex.test(argLength)) {
            return false;
        }

        return (argText.length === parseInt(argLength, 10));
    },

	/**
	 * This function will validate weather first number is gretter than second number or not
	 * @param argFirstNumber
	 * @param argSecondNumber
	 * @returns boolean
	 */
    greaterThan: function( argFirstNumber, argSecondNumber ) {
        if (!decimalRegex.test(argFirstNumber)) {
            return false;
        }

        return (parseFloat(argFirstNumber) > parseFloat(argSecondNumber));
    },

	/**
	 * This function will validate weather first number is less than second number or not
	 * @param argFirstNumber
	 * @param argSecondNumber
	 * @returns boolean 
	 */
    lessThan: function( argFirstNumber, argSecondNumber ) {
        if (!decimalRegex.test(argFirstNumber)) {
            return false;
        }

        return (parseFloat(argFirstNumber) < parseFloat(argSecondNumber));
    },

	/**
	 * This function will validate provided string is valid alpha or not
	 * @param argAlpha
	 * @returns boolean
	 */
    alpha: function( argAlpha ) {
        return alphaRegex.test(argAlpha);
    },

	/**
	 * This function will validate provided number is valid alphanumeric or not
	 * @param argAlphaNumeric
	 * @returns boolean
	 */
    alphaNumeric: function( argAlphaNumeric ) {
        return alphaNumericRegex.test(argAlphaNumeric);
    },

	/**
	 * This function will validate provided number is valid alpha with dash(-) or not
	 * @param argAlphaDash
	 * @returns boolean
	 */
    alphaDash: function( argAlphaDash ) {
        return alphaDashRegex.test(argAlphaDash);
    },

	/**
	 * This function will validate provided number is valid numeric or not
	 * @param argNumeric
	 * @returns boolean
	 */
    numeric: function( argNumeric ) {
        return numericRegex.test(argNumeric);
    },

	/**
	 * This function will validate provided number is valid integer or not
	 * @param argInteger
	 * @returns boolean
	 */
    integer: function( argInteger ) {
        return integerRegex.test(argInteger);
    },

	/**
	 * This function will validate provided number is valid decimal or not
	 * @param argDecimal
	 * @returns boolean
	 */
    decimal: function( argDecimal ) {
        return decimalRegex.test(argDecimal);
    },

	/**
	 * This function will validate IP address format is valid or not
	 * @param argIP
	 * @returns boolean 
	 */
    validIP: function( argIP ) {
        return ipRegex.test(argIP);
    },

	/**
	 * This function will validate base64 format is valid or not
	 * @param argBase64
	 * @returns boolean
	 */
    validBase64: function( argBase64 ) {
        return base64Regex.test(argBase64);
    },

	/**
	 * This function will validate URL format is valid or not
	 * @param argURL
	 * @returns boolean
	 */
    validUrl: function( argURL ) {
        return urlRegex.test(argURL);
    },
	
	/**
	 * This function will validate credit card number format is valid or not
	 * @param argCreditCard
	 * @returns boolean 
	 */
    validCreditCard: function( argCreditCard ){
        // accept only digits, dashes or spaces
        if (!numericDashRegex.test(argCreditCard)) return false;

        var nCheck = 0, nDigit = 0, bEven = false;
        var strippedField = argCreditCard.replace(/\D/g, "");

        for (var n = strippedField.length - 1; n >= 0; n--) {
            var cDigit = strippedField.charAt(n);
            nDigit = parseInt(cDigit, 10);
            if(bEven){
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) === 0;
    },
    
    /**
     * This function will validate aadhaar number format is valid or not
     * - Only 12 digits
	 * - No special characters
	 * - No space
	 * - No alphabet
	 * - Valid Formats:
	 *	 562341964296
	 *	 982345725698
	 * 
     * @param argAadhaar
     * @returns boolean
     */
    validAadhaar: function( argAadhaar ){
    	return aadhaarRegex.test(argAadhaar);
    },
    
    /**
     * This function will validate phone number format is valid or not
     * - Only below formats are allowed. Others are invalid
	 * - Valid Formats:
	 *	 9703517026
	 *   919703517026
	 *	 91-9703517026
	 *	 91 9703517026
	 *	 +919703517026
	 *	 +91-9703517026
	 *	 +91 9703517026
	 *	 09703517026
	 *
     * @param argText
     * @returns boolean
     */
    validPhone: function( argText ){
    	return phoneRegex.test(argText);
    },
    
    /**
     * This function will validate PAN number format is valid or not
     * - PAN format is XXXXX9999X where X is a alphabatic character and 9 is a numeric digit
	 * - No special character
	 * - No space
	 * - Case insensitive
	 * - Valid Formats:
	 *	 AKNPJ5811F
	 *	 TFDST2314T
	 *	
     * @param argPAN
     * @returns boolean
     */
    validPAN: function( argPAN ){
    	return panRegex.test(argPAN);
    },
    
    /**
     * This function will validate username format is valid or not
     * - Alphanumeric
	 * - Only _(underscore) and .(dot) allowed
	 * - Minimum length 6
	 * - Valid Formats:
	 *	 tapas_jena12
	 *	 tapas.jena1234
	 *	
     * @param argUsername
     * @returns boolean 
     */
    validUsername: function( argUsername ){
    	return usernameRegex.test(argUsername);
    },
    
    /**
     * This function will validate password format is valid or not
     * - Any character
	 * - Minimum length 6}$
	 * - Valid Formats:
	 *   pass_!~@#%$,.kd
	 *	 utduf$@!^@0124
	 *	
     * @param argPassword
     * @returns boolean
     */
    validPassword: function( argPassword ){
    	return passwordRegex.test(argPassword);
    }
	
};



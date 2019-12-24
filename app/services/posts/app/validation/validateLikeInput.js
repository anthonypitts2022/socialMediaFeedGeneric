//==============================================================================
// __   ____ _| (_) __| | __ _| |_(_) ___  _ __
// \ \ / / _` | | |/ _` |/ _` | __| |/ _ \| '_ \
//  \ V / (_| | | | (_| | (_| | |_| | (_) | | | |
//   \_/ \__,_|_|_|\__,_|\__,_|\__|_|\___/|_| |_|
//==============================================================================

/*
Title: Like validation
Auth: Anthony Pitts
Vers: 1.0
date: 8/7/19 *Last ModBODY
desc: Validates the Like Input
*/


//==============================================================================
// Head
//==============================================================================

const Validator = require("validator");
const isEmpty = require("./is-empty");

//==============================================================================
// BODY
//==============================================================================

module.exports = function validateLikeInput(data) {
  let errors = {};

  // Set the inputs to empty string if empty
  data.userEmail = !isEmpty(data.userEmail) ? data.userEmail : "";
  data.postId = !isEmpty(data.postId) ? data.postId : "";
  data.isLike = !isEmpty(data.isLike) ? data.isLike : null;

  //required checks
  if (Validator.isEmpty(data.postId)){
    errors.postId = "postId is required"
  }
  if (data.isLike===null){
    errors.isLike = "isLike is required"
  }

  if (!Validator.isLength(data.userEmail, { max: 30 })) {
    errors.userEmail = "length must less than 20 characters";
  }
  if (!Validator.isLength(data.postId, { max: 30 })) {
    errors.postId = "length must less than 20 characters";
  }


  return {
    msg: errors,
    isValid: isEmpty(errors)
  };
};

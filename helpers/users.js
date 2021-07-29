module.exports.findUserByEmail = function (email, users) {
    return users.find((user) => {
      return user.email_cad === email;
    });
  };

module.exports.findUserByEmail = function (email, users) {
    return users.find((user) => {
      return user.email === email;
    });
  };

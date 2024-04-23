class StudentController {
  static set_cookie = (req, res) => {
    //set Cookies
    res.cookie("username", "Yousuf");
    console.log(res.cookie);
    res.send("Cookie set...");
  };

  static get_cookie = (req, res) => {
    console.log(req.cookies);
    res.send("Cookie Get . . .");
  };

  static delete_cookie = (req, res) => {
    //THIS WOULD CLEAR THE COOKIE
    res.clearCookie("username");
    res.send("delete Get . . .");
  };
}

module.exports = StudentController;

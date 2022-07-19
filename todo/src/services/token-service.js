


class TokenService {

  static getToken () {

    return "Bearer" + localStorage.getItem("token")
  }


  static saveToken(token) {
	localStorage.setItem("token", token);
  }

  static deleteToken(token) {
    localStorage.removeItem("token")
  }



}


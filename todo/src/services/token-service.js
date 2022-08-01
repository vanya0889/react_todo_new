


export class TokenService {

  static getToken () {

    return `Bearer ${localStorage.getItem("token")}`
  }


  static saveToken(token) {
    console.log(token)
	localStorage.setItem("token", token);
  }

  static deleteToken() {
    localStorage.removeItem("token")
  }



}


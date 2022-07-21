


export class TokenService {

  static getToken (token) {

    return `Bearer ${localStorage.getItem("token")}`
  }


  static saveToken(token) {
	localStorage.setItem("token", token);
  }

  static deleteToken(token) {
    localStorage.removeItem("token")
  }



}


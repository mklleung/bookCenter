class LogIn{
  constructor(username,password){
    this.username = username
    this.password = password
  }

  toString(){
    return `LogIn(${this.username},${this.password})`
  }
}

module.exports = LogIn

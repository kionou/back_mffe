exports.pass = ()=>{
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLength = 8;
    let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let RandomNumber = Math.floor(Math.random() * chars.length)
    password += chars.substring(RandomNumber , RandomNumber + 1)
    
  }
  return password

  }
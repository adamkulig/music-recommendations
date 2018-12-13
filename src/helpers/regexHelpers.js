export const isEmailValid = email => {
  const emailRegex = /^([\w\.]+)@([a-z0-9]{2,}).([a-z]{2,})(\.[a-z]{2,})?$/;
  return emailRegex.test(email);
}

export const isPasswordValid = password => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*[0-9])([a-zA-Z0-9]{6,})$/;
  return passwordRegex.test(password);
}

export const isNicknameValid = nickname => {
  const nicknameRegex = /(\w){3,}/;
  return nicknameRegex.test(nickname);
}

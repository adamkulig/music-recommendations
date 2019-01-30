export const isEmailInvalid = email => {
  const emailRegex = /^([A-Za-z0-9._%+-]+)@([a-z0-9.-]{2,}).([a-z]{2,})(\.[a-z]{2,})?$/;
  return !emailRegex.test(email);
}

export const isPasswordInvalid = password => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*[0-9])([a-zA-Z0-9]{6,})$/;
  return !passwordRegex.test(password);
}

export const isNicknameInvalid = nickname => {
  const nicknameRegex = /(\w){3,}/;
  return !nicknameRegex.test(nickname);
}

export const isYoutubeUrlInvalid = url => {
  const youtubeUrlRegex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
  return !youtubeUrlRegex.test(url);
}

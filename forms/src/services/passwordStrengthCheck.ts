export const passwordStrengthCheck = (password: string): string => {
  if (!password) {
    return "";
  }
  let strength = 0;
  if (password.length > 7) {
    strength += 1;
  }
  if (password.match(/[A-Z]/)) {
    strength += 1;
  }
  if (password.match(/[0-9]/)) {
    strength += 1;
  }
  if (password.match(/[^A-Za-z0-9]/)) {
    strength += 1;
  }

  switch (strength) {
    case 0:
    case 1:
      return "Weak";
    case 2:
      return "Medium";
    case 3:
      return "Strong";
    default:
      return "Very Strong";
  }
};

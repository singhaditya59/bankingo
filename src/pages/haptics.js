export const haptic = (type = "light") => {
  if (!navigator.vibrate) return;

  switch (type) {
    case "success":
      navigator.vibrate([20, 40, 20]);
      break;
    case "error":
      navigator.vibrate([60, 30, 60]);
      break;
    default:
      navigator.vibrate(20);
  }
};
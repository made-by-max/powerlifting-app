export function LiftSuccessful(left: boolean, center: boolean, right: boolean) {
  let count = 0;

  if (left === true) {
    count++;
  }
  if (center === true) {
    count++;
  }
  if (right === true) {
    count++;
  }
  return count >= 2;
}

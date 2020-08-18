export const checkBudget = (budget, rest) => {
  if (budget / 4 > rest) {
    return 'alert alert-danger'
  } else if (budget / 2 > rest) {
    return 'alert alert-warning'
  } else {
    return 'alert alert-success'
  }
}

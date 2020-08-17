export function debounce(func, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)

    timer = setTimeout((...args) => {
      func.apply(this, args)
    }, delay)
  }
}

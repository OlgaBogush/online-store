export const buildUrl = (url, params) => {
  let urlWithParams = url

  Object.entries(params).forEach(([key, value], index) => {
    const sign = !index ? "?" : "&"
    urlWithParams += `${sign}${key}=${value}`
  })

  return urlWithParams
}

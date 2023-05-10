const get = (url: string, route?: string, params?: object, config?: object) => {
  let suffix = ''
  if (params) {
    const values = Object.values(params)
    Object.keys(params).forEach((key, index) => {
      suffix = `${suffix}&${key}=${values[index]}`
    })
    suffix = `?${suffix.slice(1)}`
  }
  const router = route ? `/${route}` : ''
  return fetch(`${url}${router}${suffix}`, {
    method: 'GET',
    ...config
  })
}

const post = (
  url: string,
  params?: object,
  route?: string,
  config?: object
) => {
  const router = route ? `/${route}` : ''
  return fetch(`${url}${router}`, {
    method: 'POST',
    body: JSON.stringify(params),
    ...config
  })
}

const put = (url: string, params?: object, route?: string, config?: object) => {
  const router = route ? `/${route}` : ''
  return fetch(`${url}${router}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    ...config
  })
}

const remove = (
  url: string,
  params?: object,
  route?: string,
  config?: object
) => {
  const router = route ? `/${route}` : ''
  return fetch(`${url}${router}`, {
    method: 'DELETE',
    body: JSON.stringify(params),
    ...config
  })
}

export default {
  get,
  post,
  put,
  delete: remove
}

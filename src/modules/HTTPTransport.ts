type TObject = { [key: string]: string };

type TOptions = {
  data?: XMLHttpRequestBodyInit;
  timeout?: number;
  headers?: TObject;
  method?: string;
};

const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: any): string {
  const stringDataArray = Object.keys(data.entries()).map(([key, value]) => {
    return `${key}=${value}`;
  });

  const stringData = stringDataArray.join('&');

  return `?${stringData}`;
}

class HTTPTransport {
  get = (url: string, options: TOptions) => {
    const { data } = options;
    let requestString = url;
    if (data) {
      const strinfiedData = queryStringify(data);
      requestString = `${url}${strinfiedData}`;
    }

    return this.request(requestString, {
      ...options,
      method: METHODS.GET,
      timeout: options.timeout,
    });
  };

  put = (url: string, options: TOptions = {}) => {
    return this.request(url, {
      ...options,
      method: METHODS.PUT,
      timeout: options.timeout,
    });
  };

  post = (url: string, options: TOptions = {}) => {
    return this.request(url, {
      ...options,
      method: METHODS.POST,
      timeout: options.timeout,
    });
  };

  delete = (url: string, options: TOptions = {}) => {
    return this.request(url, {
      ...options,
      method: METHODS.DELETE,
      timeout: options.timeout,
    });
  };

  // options:
  // headers — obj
  // data — obj
  request(url: string, options: TOptions) {
    const { method = METHODS.GET, data, headers, timeout = 0 } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = function () {
        resolve(xhr);
      };

      if (headers) {
        Object.keys(headers).forEach(headerKey => {
          xhr.setRequestHeader(headerKey, headers[headerKey]);
        });
      }

      xhr.timeout = timeout;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}

export default HTTPTransport;

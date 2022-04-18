type TObject<T = unknown> = {
  [key in string]: T;
};

export type TOptions = {
  data?: TObject;
  timeout?: number;
  headers?: TObject;
  method?: string;
};

enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

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
  private baseUrl: string = 'https://ya-praktikum.tech/api/v2';

  get = (url: string, options?: TOptions) => {
    return this.request(`${this.baseUrl}${url}`, {
      ...options,
      method: METHODS.GET,
      timeout: options?.timeout,
    });
  };

  put = (url: string, options: TOptions = {}) => {
    return this.request(`${this.baseUrl}${url}`, {
      ...options,
      method: METHODS.PUT,
      timeout: options.timeout,
    });
  };

  post = (url: string, options?: TOptions) => {
    return this.request(`${this.baseUrl}${url}`, {
      ...options,
      method: METHODS.POST,
      timeout: options?.timeout,
    });
  };

  delete = (url: string, options: TOptions = {}) => {
    return this.request(`${this.baseUrl}${url}`, {
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
    let requestString = url;

    if (data && method === METHODS.GET) {
      const stringifiedData = queryStringify(data);
      requestString = `${url}${stringifiedData}`;
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, requestString);

      xhr.withCredentials = true;
      xhr.setRequestHeader('content-type', 'application/json');

      if (headers) {
        Object.keys(headers).forEach(headerKey => {
          xhr.setRequestHeader(headerKey, <string>headers[headerKey]);
        });
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(xhr.response);
        } else {
          const errorText = JSON.parse(xhr.response).reason;
          reject(new Error(errorText));
        }
      };

      xhr.timeout = timeout;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (!data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}

export default HTTPTransport;

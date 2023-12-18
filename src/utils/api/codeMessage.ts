export const codeMessage: { [key: number]: string } = {
  200: 'The server successfully returned the requested data.',
  201: 'Create or modify data successfully.',
  202: 'A request has been queued in the background (asynchronous task).',
  204: 'Delete data successfully.',
  400: 'There is an error in the request sent, and the server has not performed operations to create or modify data.',
  401: 'User does not have permission (wrong token, username, password).',
  403: 'User is authorized, but access is forbidden.',
  404: 'The request was made for a record that does not exist, and the server did not perform an operation.',
  406: 'The requested format is not available.',
  410: 'The requested resource has been permanently deleted and will not be retrieved.',
  422: 'A validation error occurred while creating an object.',
  500: 'An error occurred on the server, please check the server.',
  502: 'Bad gateway.',
  503: 'The service is unavailable, the server is temporarily overloaded or under maintenance.',
  504: 'Gateway timed out.'
}

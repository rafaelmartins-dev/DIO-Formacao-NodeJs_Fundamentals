
export const HttpStatus = {
  // ✅ 2xx Success

  OK: 200, // Requisição bem-sucedida (GET, PUT, PATCH)
  CREATED: 201, // Recurso criado com sucesso (POST)
  ACCEPTED: 202, // Requisição aceita, mas ainda será processada
  NO_CONTENT: 204, // Sucesso, mas sem conteúdo na resposta

  // ⚠️ 3xx Redirection

  MOVED_PERMANENTLY: 301, // Recurso movido permanentemente para outra URL
  FOUND: 302, // Redirecionamento temporário
  NOT_MODIFIED: 304, // Conteúdo não foi modificado (cache)

  // ❌ 4xx Client Errors

  BAD_REQUEST: 400, // Requisição inválida (dados errados)
  UNAUTHORIZED: 401, // Não autenticado (login necessário)
  FORBIDDEN: 403, // Sem permissão para acessar
  NOT_FOUND: 404, // Recurso não encontrado
  METHOD_NOT_ALLOWED: 405, // Método HTTP não permitido
  CONFLICT: 409, // Conflito (ex: recurso já existe)
  UNPROCESSABLE_ENTITY: 422, // Dados válidos mas regra de negócio inválida
  TOO_MANY_REQUESTS: 429, // Muitas requisições (rate limit)

  // 💥 5xx Server Errors

  INTERNAL_SERVER_ERROR: 500, // Erro genérico no servidor
  NOT_IMPLEMENTED: 501, // Funcionalidade não implementada
  BAD_GATEWAY: 502, // Erro ao receber resposta de outro servidor
  SERVICE_UNAVAILABLE: 503, // Serviço indisponível
  GATEWAY_TIMEOUT: 504, // Timeout de outro servidor
} as const;
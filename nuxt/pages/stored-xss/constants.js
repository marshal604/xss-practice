export const COOKIE_KEY = 'stored-xss-items'

const scriptStart = '<script>alert(1)</'
const scriptEnd = 'script>'

export const DEFAULT_XSS = scriptStart + scriptEnd

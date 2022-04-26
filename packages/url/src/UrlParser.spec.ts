import { describe, expect, it } from 'vitest'
import { UrlParser } from './UrlParser'

describe('url', () => {
  it('should assign query', function () {
    const url = new UrlParser('https://www.demo.com/?foo=1')
    url.assignQuery({
      bar: 'hello',
    })
    const str = url.getUrl()
    expect(str).toBe('https://www.demo.com/?foo=1&bar=hello')
  })
  it('should remove query', function () {
    const url = new UrlParser('https://www.demo.com/?foo=1&bar=hello')
    url.removeQuery('foo')
    const str = url.getUrl()
    expect(str).toBe('https://www.demo.com/?bar=hello')
  })
})

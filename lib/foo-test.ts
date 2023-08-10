import { describe, it } from 'node:test'
import assert from 'node:assert'
import { foo } from './foo'

describe('foo', () => {
  it('loads', () => {
    assert.equal(foo, 'foo')
  })
})

import { assert } from 'chai'
import { foo } from './foo'

describe('foo', () => {
  it('loads', () => {
    assert.equal(foo, 'foo')
  })
})

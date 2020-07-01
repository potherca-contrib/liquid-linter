const Liquid = require('liquid')

// Not a block because can be used without endsection
class Tag extends Liquid.Tag {
  // Dummy because we're not rendering we're just checking presence
  render () {
    return ''
  }
}

module.exports = Tag

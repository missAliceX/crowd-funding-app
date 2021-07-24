const handleSubmit = (handler, validator = {}) => {
  return e => {
    e.preventDefault()
    const data = {}
    const errs = {}
    for (let i = 0; i < e.target.length; i++) {
      const name = e.target.elements[i].getAttribute('name')
      if (name == null) continue
      const value = e.target.elements[i].value
      const keys = name.split(/-(?=[0-9]+$)/)

      if (validator[keys[0]] === undefined) continue

      let target = validate(validator[keys[0]].validate, name, value)
        ? data
        : errs

      if (keys.length === 2) {
        if (!target[keys[0]]) {
          target[keys[0]] = [value]
        } else {
          target[keys[0]].push(value)
        }
      } else {
        target[keys[0]] = value
      }
    }
    handler(data, errs)
  }
}

const passwordRegex = new RegExp(
  '^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$'
)

const validate = (preset, name, value) => {
  switch (preset) {
    case 'password':
      return passwordRegex.test(value)
    case 'text':
    default:
      return true
  }
}

export { handleSubmit }

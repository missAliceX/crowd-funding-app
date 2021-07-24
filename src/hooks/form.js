// React hooks must use refs which is unavailable for functional components that we use.
// Why not just use the default HTML Form name attribute?
// Additionally, the data collection does not support lists of similar inputs
const handleSubmit = (handler, validator = {}) => {
  return e => {
    // Prevents the form from going to the next page
    e.preventDefault()
    const data = {} // stores values succeeded in validation
    const errs = {} // stores values that failed validation

    // Itereate through all the inputs in the form
    for (let i = 0; i < e.target.length; i++) {
      let name = e.target.elements[i].getAttribute('name')
      if (name == null) continue

      const value = e.target.elements[i].value
      const keys = name.split(/-(?=[0-9]+$)/)
      if (validator[keys[0]] === undefined) continue

      // Change the target object if validation succeeds or fails
      let target = validate(validator[keys[0]].validate, name, value)
        ? data
        : errs

      // Format it into snake case
      const newKey = keys[0].replace(/-/g, '_')
      // Push the item to the list if it ends with "-(some_number)"
      if (keys.length === 2) {
        if (!target[newKey]) {
          target[newKey] = [value]
        } else {
          target[newKey].push(value)
        }
      } else {
        target[newKey] = value
      }
    }

    // Allow the handler to do what it wants with the data and errors
    handler(data, errs)
  }
}

// A regular express to validate passwords
const passwordRegex = new RegExp(
  '^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$'
)

// validates the value depending on the preset
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

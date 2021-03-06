import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provider DomListener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        const name = this.name || ''
        // eslint-disable-next-line max-len
        throw new Error(`Method ${method} is not implemented in ${name} Component`)
      }
      // this.$root - экзмепляр класса Dom
      // Так как это JS и тереяется контекст у метода то привзяываем через this
      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDOMListeners() {

  }
}

// input-> onInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provider DomListener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {

  }

  removeDOMListeners() {

  }
}

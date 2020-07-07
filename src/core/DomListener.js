export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`No $root provider DomListener`)
    }
    this.$root = $root
  }
}

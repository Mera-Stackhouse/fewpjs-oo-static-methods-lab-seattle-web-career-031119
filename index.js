class Formatter {

  static capitalize(string) {
    return string = string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1)
    const array = string.split(" ")
    const newArray = []
    for (const item of array) {
      if (['the', 'a', 'an', 'but', 'my', 'of', 'and', 'for', 'is', 'at', 'by', 'from'].includes(item)) {
        newArray.push(item)
      } else {
        const newItem = item.charAt(0).toUpperCase() + item.slice(1)
        newArray.push(newItem)
      }
    }
    return newArray.join(" ")
  }

}

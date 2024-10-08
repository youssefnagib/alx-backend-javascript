export default function cleanSet(set, startString) {
  if (
    !set || !startString || !(set instanceof Set) || typeof startString !== 'string'
  ) {
    return '';
  }

  const result = [];
  if (startString) {
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        result.push(value.slice(startString.length));
      }
    });
  }
  return result.join('-');
}

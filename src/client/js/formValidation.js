export function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
    // alert('The text entered is not a valid URL');
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
}

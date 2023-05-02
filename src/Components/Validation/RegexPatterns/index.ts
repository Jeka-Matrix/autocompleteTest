export const patterns = {
  hebrew: new RegExp(`^[\u0590-\u05fe'" ]+$|^$`),
  AddressHe: new RegExp(`^[\u0590-\u05fe'"() - - .]+$|^$`),
  english: new RegExp(`^[a-zA-Z'" ]+$|^$`),
  number: new RegExp('^[0-9]+$|^$'),
  englishAndNum: new RegExp('^[A-Za-z0-9]*$'),
  decimalNum: new RegExp('^[0-9]+.?[0-9]*$'),
  courtBarcode: new RegExp(`[0-9]{13}`),
  mobile: new RegExp('^[0]{1}[0-9]{9}$'),
  phone: new RegExp('^[0]{1}[0-9]{8,9}$'),
  name: new RegExp(`^[&quot;(\\)\\n(\\\\)\\'\\- א-תA-Za-z.,]*$`),
  freeText: new RegExp("^[&quot;(\\)\\n(\\\\)\\'\\- א-ת0-9A-Za-z.,+_$@:\"]*$")
} as const;


export const fieldNames  ={
  FistName: 'שם פרטי',
  LastName: 'שם משפחה',
  fullName: 'שם מלא',
  mobile: 'מספר טלפון',
  email: 'דואר אלקטרוני',
  settlement: 'ישוב',
  houseNum: 'מספר בית',
  houseEntrance: 'כניסה',
  apartmentNum: 'מספר דירה',
  zip: 'מיקוד',
} as const;


export const ErrorMessages= {
  shortText : 'קצר מדי',
  spaces: 'אין להשתמש ברווחים',
  badAddress : 'יש להזין אותיות בעברית בלבד',
  heOnly : 'יש להזין אותיות בעברית בלבד',
  enOnly : 'יש להזין אותיות לועזיות בלבד',
  numbersOnly : 'יש להזין מספרים בלבד',
  positiveNumOnly : 'מספר חיובי בלבד',
  required : 'שדה חובה',
  emailError : 'דוא"ל לא חוקי',
  oneOf : 'יש לבחור באפשרות אחת לפחות',
  ifDatePickHour: 'בחר שעה או אסר תאריך',
  wrongInput: 'לא תקין',
  invalidBarcode: 'ברקוד לא חוקי',
  invalidPhoneNumber: 'מספר לא תקין',
  invalidMobileNumber: 'מספר נייד לא תקין',
  tooShort:"קצר מדי",
  tooLong:"ארוך מדי",
  otp6: "יש להזין 6 ספרות",
  tooLargeValue: "ערך גדול מדי",
}
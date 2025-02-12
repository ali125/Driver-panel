// 09123456789 => +989123456789
export const handlePhoneNumber = (phoneNumber: string) => {
  // Check if the number starts with '09'
  if (phoneNumber.startsWith("09") && phoneNumber.length === 11) {
    return "98" + phoneNumber.slice(1); // Replace '09' with '+98'
  } else {
    throw new Error(
      'Invalid number format. It must start with "09" and be 11 digits long.'
    );
  }
};

export const getFileSizeMB = (fileSize: number) => {
  return (fileSize / 1024 / 1024).toFixed(2);
};

export const convertToEnglishDigits = (input: string) => {
  const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const arDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  const enDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Replace Farsi digits
  faDigits.forEach((faDigit, index) => {
    input = input.replace(new RegExp(faDigit, "g"), enDigits[index]);
  });

  // Replace Arabic digits
  arDigits.forEach((arDigit, index) => {
    input = input.replace(new RegExp(arDigit, "g"), enDigits[index]);
  });

  return input;
};

export const phoneFarsiPatternNoZero = new RegExp(
  "^[0-9\u06F0-\u06F9\u0660-\u0669]{10}$"
);
export const phoneFarsiPattern = new RegExp(
  "^(09|۰۹)[0-9\u06F0-\u06F9\u0660-\u0669]{9}$"
);

export const meliCodeFarsiPattern = new RegExp(
  "^[0-9\u06F0-\u06F9\u0660-\u0669]{10}$"
);

export function isFullname(fullname, minLength) {
    return fullname.length >= minLength;
}

export function isEmail(value) {
    return value.includes('@');
}

export function passwordCheck(value, minLength) {
    return value?.length >= minLength;
}

export function matchPassword(password, confirm_password) {
    return password !== confirm_password;
}

export function isPhoneNumber(value, numberLength) {
    return value.length === numberLength;
}
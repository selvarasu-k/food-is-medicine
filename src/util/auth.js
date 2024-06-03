export function getAuthId() {
    const authId = localStorage.getItem('authentication');
    return authId;
}

export function authLoader() {
    const authId = getAuthId();
    return authId;
}
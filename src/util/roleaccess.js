export function getAuthRole() {
    const roleAccess = localStorage.getItem('userrole');
    return roleAccess;
}

export function roleLoader() {
    const roleAccess = getAuthRole();
    return roleAccess;
}


export const validateId = (id: any): boolean => {
    // verificar se o id existe
    if (id === undefined || id === null) return false;

    // verificar se o id é numero
    if (isNaN(Number(id))) return false;

    // verificar se o id é maior que zero
    if (Number(id) <= 0) return false;

    return true;

};
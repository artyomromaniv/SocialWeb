

export const required = (value:string) => {
    if (value) return undefined;
    return 'field is required';
}
export const maxLengthTC = (maxLength:number) => (value:string) => {
    if (value.length > maxLength ) return `Max length is ${maxLength} symbols`;
    return undefined;
}

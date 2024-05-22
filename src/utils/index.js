
export const shortText = (text,n)=>{
    if(text.length > n){
        const shortenedText = text.substring(0,n).concat("...")
        return shortenedText
    }
    return text;
};
//validate email
export const validateEmail = (email)=>{
    return email.match(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
           
    )
};

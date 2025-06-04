export const checkValidData= (email,password,name,isSignIn)=>{
    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    if(!isSignIn){
        const isName = /^[a-zA-z\s]{4,}$/.test(name);
        if(!isName) return "Name not Valid"
    }


    if(!isEmail) return "Email not Valid";
    if(!isPassword) return "Password not Valid";

    return null;
}
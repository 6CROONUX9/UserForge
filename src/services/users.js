export const validationEmailInput = {
    required:{
        value:true,
        message:"Este campo es requerido"
    },
    minLength:{
        value:4,
        message:"Minimo 4 caracteres"
    },
}

export const  validationPasswordInput = {
    required:{
        value:true,
        message:"Este campo es requerido"
    },
    pattern:{
        value:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        message: "No cumple con el formato de contraseña"
    }
}

export const validationNameInput = {
    required:{
        value:true,
        message:"Este campo es requerido"
    },
    maxLength:{
        value:15,
        message:"Excedes la cantidad de caracteres, maximo 15"
    },
    minLength:{
        value:4,
        message:"Minimo 4 caracteres"
    }
}
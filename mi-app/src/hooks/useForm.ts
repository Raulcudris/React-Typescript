import { ChangeEvent, useState } from 'react';


export function userForm<T>(initState: T) {

    const [formulario, setFormulario] = useState( initState );    
    const handleChange = ({target} : ChangeEvent<HTMLInputElement>) =>{
        const { name , value } = target;
        setFormulario({
            ...formulario,
            [name] : value
        })
    }
    return {
         formulario,
         handleChange
    }

}


// export const  userForm = (initState: any) =>{
//     //export const  userForm = (initState: any) =>{
//     const [formulario, setFormulario] = useState( initState );
    
//     const handleChange = ({target} : ChangeEvent<HTMLInputElement>) =>{
//         const { name , value } = target;
//         setFormulario({
//             ...formulario,
//             [name] : value
//         })
//     }
//     return {
//          formulario,
//          handleChange
//     }

// }
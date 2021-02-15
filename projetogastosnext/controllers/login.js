
export async function login (form){
    console.log(form)
    try {
        const res = await fetch("http://localhost:3000/api/usuarios",{
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form),
        }).then((response) => {
            return response.json()
        })
        const {data} = await res.json();
        
        console.log(data._id);
        if(data.email === form.email && data.senha === form.senha){
            console.log("Usuario encontrado")
        }else{
            console.log("Usuario feio")
        }

    } catch (error) {
        console.error(error);
    }
    
}






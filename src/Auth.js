export const isAutenticate = () => {
    console.log(sessionStorage)
    if(sessionStorage.getItem('usuario')){
        return true;
    }else{
        return false
    }
 
}


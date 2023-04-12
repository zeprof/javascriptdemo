function addName (time, name){
    return new Promise ((resolve, reject) => {
        if(name){
            setTimeout(()=>{
                console.log(name)
                resolve();
            },time)
        }else{
            reject('No such name');
        }
    })
}

addName(2000, 'Joel')
    .then(()=>addName(2000, 'Victoria'))
    .then(()=>addName(2000, 'John'))
    .then(()=>addName(2000, 'Doe'))
    .then(()=>addName(2000, 'Sarah'))
    .catch((err)=>console.log(err))
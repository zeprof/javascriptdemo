async function addName (time, name){
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

await addName(2000, 'Joel');
await addName(2000, 'Victoria');
await addName(2000, 'John');
await addName(2000, 'Doe');
await addName(2000, 'Sarah')
await addName(2000, null)
    .catch((err)=>console.log(err))
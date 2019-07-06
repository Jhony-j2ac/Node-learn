const fs  = require("fs");


fs.rename("data1.txt", "data.txt", (error)=> {
    if(error){
        console.log(error);
    }
})

fs.readFile("userdata.json", (error, data) => {
    if(error){
        console.log(`error en lectura 1 ${error}`);
    }else{
        let data1 = fs.readFileSync('data.txt', 'utf8');

        let nombre = JSON.parse(data);
        fs.appendFile("data1.txt", `${data1} el nombre de el usuario es ${nombre.nombre}`, (error) => {
            console.log(data1);
            if(error) throw error;
            fs.unlink("data.txt", (error) =>{
                if(error){
                    console.log(error);
                }
            });
        });
        
    }
})


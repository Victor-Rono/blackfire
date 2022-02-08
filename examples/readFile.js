const {readFile, writeFile} = require("fs").promises;

const start = async()=>{

    try {
        const first = await readFile("./subfolder/first.txt","utf8");  
        const second = await readFile("./subfolder/second.txt","utf8");  
        const third = await writeFile("./subfolder/third.txt",(first +'\n'+ second),{flag:'a'})
        console.log(first, second);
    } catch (error) {
      console.log(error)  
    }
    
}
 
start()
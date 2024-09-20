function f1(){
    let age = 20
    
    function f2(){
        age++
        console.log(age);
        
    }
    age = 30
    return f2
}

const result = f1();
result()
result()
result()
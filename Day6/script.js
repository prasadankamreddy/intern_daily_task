function checkEligibility() {
    let age = Number(document.getElementById('age').value)
    let marks = Number(document.getElementById('marks').value)


    if (age >= 18 && marks >=50){
        document.getElementById('result').innerHTML = '<span style = "color : green; ">You are Eligible....</span>'
        
    }else{

        document.getElementById('result').innerHTML = '<span style="color:red;">You are Not Eligible...</span>';   
    
    }

}

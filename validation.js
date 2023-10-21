const validate=()=>{
    let name=document.form.name.value;
    let email=document.form.email.value;
    let number=document.form.number.value;
    let name_status=email_status=num_status= false;
    let name_char=/^[A-Za-z]+$/
    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    let email_char=/^([A-Za-z 0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let num_digits=/^[0-9]+$/
    // name vlidation
    if(name===""){
        document.getElementById("nameerror").innerHTML="Enter Your name";
        name_status= false;
    }else{
        if(name.match(name_char)){
            document.getElementById("nameerror").innerHTML="";
            name_status= true;
        }else{
            document.getElementById("nameerror").innerHTML="enter alphabets only";
            name_status= false;
        }
    }
    // email vlidation
    if(email===""){
        document.getElementById("emailerror").innerHTML="Please enter your email";
        email_status= false;
    }else{
        if(email.match(email_char)){
            document.getElementById("emailerror").innerHTML="";
            email_status= true;
        }else{
            document.getElementById("emailerror").innerHTML="enter valid email address";
            email_status= false;
        }
    }
    // number vlidation
    if(number===""){
        document.getElementById("numerror").innerHTML="Please enter your number";
        num_status= false;
    }else{
        if(number.match(num_digits)){
            if(number.length==10){
                document.getElementById("numerror").innerHTML="";
                num_status=true;
            }else{
                document.getElementById("numerror").innerHTML="enter 10 digits";
                num_status= false;
            }
            
        }else{
            document.getElementById("numerror").innerHTML="enter digits";
            num_status= false;
        }
    }
    //final validation
    if (name_status===true && email_status===true && num_status===true){
        return true;
    }else{
        return false;
    }
}
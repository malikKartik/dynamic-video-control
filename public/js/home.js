window.onload=()=>{
  if(!document.cookie){     
      location.href='/login'
  }
}

 const logout = ()=>{
  if(!document.cookie){     
      location.href='/login'
  }
  document.cookie=""
    let token = document.cookie
   $.ajax({
       type: "POST",
       url: "https://youtube-app-auth-api.herokuapp.com/users/logout",
       headers: {
        'Authorization': document.cookie
    },
       data: JSON.stringify({
           "token":token
       }),
       crossDomain: true,
       dataType: "json",
       contentType: "application/json",
       success: function (response) {
           console.log(response);
           document.cookie=""
           location.href='/login'
       },
       error: function(e){
        console.log(e);
       }
   });
   document.cookie=""
 }

    const logoutall = ()=>{
      if(!document.cookie){     
      location.href='/login'
      }
      
    let token = document.cookie
   $.ajax({

       type: "POST",
       url: "https://youtube-app-auth-api.herokuapp.com/users/logoutall",
       headers: {
        'Authorization': document.cookie
    },
       data: JSON.stringify({
           "token":token
       }),
       crossDomain: true,
       dataType: "json",
       contentType: "application/json",
       success: function (response) {
           console.log(response);
           document.cookie=""
           location.href='/login'
       },
       error: function(e){
        console.log(e);
       }

   });
   document.cookie=""
 }
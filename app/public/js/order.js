document.querySelector('#lite-shop-order').onsubmit = function (event) { 
    event.preventDefault();
    let username = document.querySelector('#username').value.trim();
    let phone = document.querySelector("#phone").value.trim();
    let email = document.querySelector("#email").value.trim();
    let address = document.querySelector("#address").value.trim();

    if (!document.querySelector('#rule').checked) { 
        //  з правилами  не згоден
        Swal.fire({
            title: 'Warning',
            text: 'Read and acept the rule',
            icon: 'info',
            confirmButtonText: 'OK'
        });
        return false;

    }

    if (username == '' || phone == '' || email == '' || address == '') { 
        // не заповнені поля
         Swal.fire({
           title: "Warning",
           text: "Fill all fields",
           icon: "info",
           confirmButtonText: "OK",
         });
         return false;
    }

    // відправляємо запит
    fetch("/finish-order", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        phone: phone,
        address: address,
        email: email,
        key: JSON.parse(localStorage.getItem("cart")),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    })
        .then(function (response) { 
            return response.text();
        })
        .then(function (body) {
            if (body == 1) {
                Swal.fire({
                  title: "Success",
                  text: "Success",
                  icon: "info",
                  confirmButtonText: "OK",
                });
            }
            else { 
                Swal.fire({
                title: "Problem with mail",
                text: "Error",
                icon: "error",
                confirmButtonText: "OK",
                });
            }
        })
    
} 


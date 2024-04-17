document.addEventListener('DOMContentLoaded', function () {
    // Pavel's comment: you dont need it
    // Function to retrieve query parameters from the URL
    // const getUrlParameter = (name) => {
    //     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    //     const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    //     const results = regex.exec(location.search);
    //     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    // };

    // Pavel's comment: you can just use URLSearchParams instead of your logic in getUrlParameter function
    const urlParams = new URLSearchParams(window.location.search);

    // Pavel's comment: you should use urlParams instead of commented getUrlParameter function
    // Retrieve and display name, email, phone, and total amount
    const name = urlParams.get('name') //getUrlParameter('name');
    const email = urlParams.get('email') //getUrlParameter('email');
    const phone = urlParams.get('phone') //getUrlParameter('phone');
    const total = urlParams.get('total') //getUrlParameter('total');

    // Pavel's comment: you make a mistake in ids
    document.getElementById('checkoutName').innerText = name;
    document.getElementById('checkoutEmail').innerText = email;
    document.getElementById('checkoutPhone').innerText = phone;
    document.getElementById('checkoutTotalPrice').innerText = total;

    // Pavel's comment: I didn't find this inputs in your html
    // Populate hidden input fields with name, email, and phone
    // document.getElementById('nameInput').value = name;
    // document.getElementById('emailInput').value = email;
    // document.getElementById('phoneInput').value = phone;
});

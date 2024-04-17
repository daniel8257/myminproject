document.addEventListener('DOMContentLoaded', function() {
    // Function to retrieve query parameters from the URL
    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    // Retrieve and display name, email, phone, and total amount
    const name = getUrlParameter('name');
    const email = getUrlParameter('email');
    const phone = getUrlParameter('phone');
    const total = getUrlParameter('total');

    document.getElementById('name').innerText = name;
    document.getElementById('email').innerText = email;
    document.getElementById('phone').innerText = phone;
    document.getElementById('total').innerText = total;

    // Populate hidden input fields with name, email, and phone
    document.getElementById('nameInput').value = name;
    document.getElementById('emailInput').value = email;
    document.getElementById('phoneInput').value = phone;
});
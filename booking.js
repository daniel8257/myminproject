document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const totalPriceInput = document.getElementById('totalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');
    // Pavel's comment: add missing variables
    const checkoutLink = document.getElementById('checkoutLink');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    // Pavel's comment: very strange function I suggest to use "FormData"
    // Function to calculate total price
    const calculateTotalPrice = () => {
        console.log('Calculating total price...');
        let totalPrice = 0;
        const numRoomsInputs = document.querySelectorAll('.num-rooms');
        const priceInputs = document.querySelectorAll('.price');

        numRoomsInputs.forEach((numRoomsInput, index) => {
            const numRooms = parseInt(numRoomsInput.value);
            const price = parseInt(priceInputs[index].value.slice(1));
            console.log(`Rooms: ${numRooms}, Price: ${price}`);
            totalPrice += numRooms * price;
        });

        totalPriceInput.value = `$${totalPrice}`;

        // Pavel's comment: you will use "totalPrice" when you will create search params
        return totalPrice
    };

    // Pavel's comment: function for creating search params
    const createSearchParams = ({name, email, phone, total}) => {
        const params = new URLSearchParams();
        params.append('name', name)
        params.append('email', email)
        params.append('phone', phone)
        params.append('total', total)

        return params
    }

    // Event listeners
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const totalPrice = calculateTotalPrice();
        // Pavel's comment: create search params from your input values and total price
        const searchParams = createSearchParams({
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            total: totalPrice
        })

        checkoutBtn.style.display = 'block';
        // Pavel's comment: modify your link href to pass search params to checkout page
        checkoutLink.href = `./checkout.html?${searchParams.toString()}`
    });

    bookingForm.addEventListener('change', calculateTotalPrice);
});

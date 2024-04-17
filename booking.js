document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const totalPriceInput = document.getElementById('totalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
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
    };
    
    // Event listeners
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        calculateTotalPrice();
        checkoutBtn.style.display = 'block';
    });
    
    bookingForm.addEventListener('change', calculateTotalPrice);
});
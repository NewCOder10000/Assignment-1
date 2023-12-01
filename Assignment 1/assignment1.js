document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.querySelector('.Button1');
    if (orderButton) {
        orderButton.addEventListener('click', function() {
            this.textContent = "Ordered";

            setTimeout(() => {
                this.textContent = "Order";
            }, 1000);

            const itemName = document.querySelector('.lbl1');
            const itemPrice = document.querySelector('.p0');

            if (itemName && itemPrice) {
                const newItem = document.createElement('li');
                newItem.textContent = `${itemName.textContent} - ${itemPrice.textContent}`;

                const shoppingCart = document.querySelector('.items');
                if (shoppingCart) {
                    shoppingCart.appendChild(newItem);

                    const totalAmount = document.getElementById('total-amount');
                    if (totalAmount) {
                        const currentTotal = parseFloat(totalAmount.textContent.slice(1));
                        const price = parseFloat(itemPrice.textContent.split('Price: S$')[1]);
                        const newTotal = currentTotal + price;
                        totalAmount.textContent = `$${newTotal.toFixed(2)}`;
                    }
                }
            }
        });
    }
});


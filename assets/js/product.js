document.addEventListener('DOMContentLoaded', function() {
    const toggleIcon = document.getElementById("toggle-icon");
    const hiddenText = document.getElementById("hidden-text");
    const cartItemsDiv = document.getElementById("cart-items");
    const cartTotalDiv = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
    const buyBtn = document.getElementById("buy-btn");
    const quantityButtons = document.querySelectorAll('.quantity-btn');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal img');
    const closeBtn = document.querySelector('.close');

    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Set initial quantity to 1 for all products
    document.querySelectorAll('.quantity').forEach(span => {
        if (parseInt(span.textContent) === 0) {
            span.textContent = 1;
        }
    });
    
    updateCartDisplay();
    updateQuantityDisplays();

    // Toggle cart visibility
    toggleIcon.addEventListener("click", function() {
        hiddenText.style.display = hiddenText.style.display === "block" ? "none" : "block";
    });

    // Handle quantity buttons (+ and -) on product cards
    quantityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.name;
            const quantitySpan = document.querySelector(`.quantity[data-name="${productName}"]`);
            let currentQuantity = parseInt(quantitySpan.textContent);

            if (this.classList.contains('plus')) {
                currentQuantity++;
            } else if (currentQuantity > 1) { // Changed from 0 to 1 to maintain minimum of 1
                currentQuantity--;
            }

            quantitySpan.textContent = currentQuantity;
            quantitySpan.dataset.userChanged = true; // Mark as user-changed
        });
    });

    // Handle "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.name;
            const productPrice = parseFloat(this.dataset.price);
            const productImage = this.dataset.image;
            const quantitySpan = document.querySelector(`.quantity[data-name="${productName}"]`);
            const quantityToAdd = parseInt(quantitySpan.textContent);

            if (quantityToAdd > 0) {
                addToCart(productName, productPrice, productImage, quantityToAdd);
                quantitySpan.textContent = 1; // Reset to 1 instead of 0
                quantitySpan.dataset.userChanged = false; // Reset user-changed flag
                updateCartDisplay();
            }
        });
    });

    // Handle "Buy" button
    buyBtn.addEventListener('click', function() {
        if (cart.length > 0) {
            const message = generateWhatsAppMessage();
            const encodedMessage = encodeURIComponent(message);
            const whatsappLink = `https://wa.me/+212706194405?text=${encodedMessage}`;
            window.open(whatsappLink, '_blank');
        }
    });

    // Modal: Open image on click
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.style.display = 'block';
            setTimeout(() => modal.classList.add('active'), 10);
        });
    });

    // Modal: Close on close button click
    closeBtn.addEventListener('click', closeModal);

    // Modal: Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Modal: Zoom on image click
    modalImg.addEventListener('click', () => {
        modal.classList.toggle('zoomed');
    });

    // Add to cart with specified quantity and image
    function addToCart(name, price, image, quantity) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name, price, image, quantity });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Remove from cart
    function removeFromCart(name, amount = cart.find(item => item.name === name)?.quantity) {
        const itemIndex = cart.findIndex(item => item.name === name);
        if (itemIndex !== -1) {
            if (amount >= cart[itemIndex].quantity) {
                cart.splice(itemIndex, 1);
            } else {
                cart[itemIndex].quantity -= amount;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateQuantityDisplays();
            updateCartDisplay();
        }
    }

    // Update cart display
    function updateCartDisplay() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        if (cart.length === 0) {
            cartItemsDiv.innerHTML = "Cart is empty";
            cartTotalDiv.textContent = "Total: 0 DH";
            buyBtn.disabled = true;
        } else {
            cartItemsDiv.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <span>${item.name} - ${item.quantity} x ${item.price} DH = ${item.quantity * item.price} DH</span>
                    </div>
                    <div class="cart-item-buttons">
                        <button class="cart-item-btn reduce" data-name="${item.name}">-</button>
                        <button class="cart-item-btn remove" data-name="${item.name}"><ion-icon name="trash"></ion-icon></button>
                    </div>
                </div>
            `).join('');
            const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            cartTotalDiv.textContent = `Total: ${totalPrice} DH`;
            buyBtn.disabled = false;

            // Add event listeners to cart buttons
            document.querySelectorAll('.cart-item-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const productName = this.dataset.name;
                    if (this.classList.contains('remove')) {
                        removeFromCart(productName);
                    } else if (this.classList.contains('reduce')) {
                        removeFromCart(productName, 1);
                    }
                    updateCartDisplay();
                    updateQuantityDisplays();
                });
            });
        }
    }

    // Update quantity displays on product cards
    function updateQuantityDisplays() {
        document.querySelectorAll('.quantity').forEach(span => {
            const productName = span.dataset.name;
            const cartItem = cart.find(item => item.name === productName);
            
            // Only update if not manually changed by user
            if (!span.dataset.userChanged) {
                // Use quantity from cart if it exists, otherwise default to 1
                span.textContent = cartItem ? cartItem.quantity : 1;
            }
        });
    }

    // Generate WhatsApp message with image URLs
    function generateWhatsAppMessage() {
        let message = "Hello, I'd like to place an order:\n\n";
        cart.forEach(item => {
            message += `${item.name}\n`;
            message += `Quantity: ${item.quantity}\n`;
            message += `Price: ${item.quantity * item.price} DH\n`;
            // message += `Image: ${item.image}\n\n`;
        });
        const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        message += `Total: ${totalPrice} DH`;
        return message;
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        modal.classList.remove('zoomed'); // Reset zoom
        setTimeout(() => modal.style.display = 'none', 300);
    }
});
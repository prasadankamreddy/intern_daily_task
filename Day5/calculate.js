function calculateSubtotal(price, quantity) {
            return price * quantity;
        }

        function calculateDiscount(subtotal, discountPercent) {
            return subtotal * discountPercent / 100;
        }

        function calculateFinalTotal(subtotal, discountAmount) {
            return subtotal - discountAmount;
        }

        function calculateTotal() {
            const price = Number(document.getElementById("price").value);
            const quantity = Number(document.getElementById("quantity").value);
            const discountPercent = Number(document.getElementById("discount").value);
            const result = document.getElementById("result");

            if (
                document.getElementById("price").value === "" ||
                document.getElementById("quantity").value === "" ||
                document.getElementById("discount").value === "" ||
                !Number.isFinite(price) ||
                !Number.isFinite(quantity) ||
                !Number.isFinite(discountPercent) ||
                price < 0 ||
                quantity < 1 ||
                !Number.isInteger(quantity) ||
                discountPercent < 0 ||
                discountPercent > 100
            ) {
                result.textContent ="Enter a valid price, whole-number quantity, and discount from 0 to 100.";
                return;
            }

            const subtotal = calculateSubtotal(price, quantity);
            const discountAmount = calculateDiscount(subtotal, discountPercent);
            const finalTotal = calculateFinalTotal(subtotal, discountAmount);

            result.innerHTML = `
                <p>Subtotal: ${subtotal}</p>
                <p>Discount: ${discountAmount}</p>
                <strong>Final Total: ${finalTotal}</strong>
            `;
        }

        calculateTotal();

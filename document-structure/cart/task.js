const products = document.querySelectorAll(".product"); //продукты
const cart = document.querySelector(".cart__products"); //корзина

products.forEach(product => {
    const quantityValue = product.querySelector(".product__quantity-value"); //количество
    const quantityControls = product.querySelectorAll(".product__quantity-control"); //кнопки +-
    const addButton = product.querySelector(".product__add"); //кнопка добавить в корзину

    quantityControls.forEach(control => { //кнопки +-
        control.addEventListener("click", () => {
            let currentValue = parseInt(quantityValue.textContent); //количество из строки в число
            if (control.classList.contains("product__quantity-control_dec") && currentValue > 1) {
                quantityValue.textContent = currentValue - 1;
            } else if (control.classList.contains("product__quantity-control_inc")) {
                quantityValue.textContent = currentValue + 1;
            }
        });
    });

    addButton.addEventListener("click", () => { //кнопка добавить в корзину
        const productId = product.dataset.id; //id продукта
        const productImage = product.querySelector(".product__image"); //картинка
//        console.log(productImage);
//        console.log(productImage.src);
//        console.log(productImage.alt);

        const productImageSrc = productImage.src; //картинка
        const productCount = parseInt(quantityValue.textContent); //количество
        console.log(productCount);

        console.log(productId);

        const existingProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);
        if (existingProduct) {
            const existingCount = existingProduct.querySelector(".cart__product-count");
            existingCount.textContent = parseInt(existingCount.textContent) + productCount;
        } else { //если нет в корзине то создаем новый  код в HTML
            const cartProduct = document.createElement("div"); //корзина
            cartProduct.className = "cart__product";
            cartProduct.dataset.id = productId;

            const cartImage = document.createElement("img"); //картинка
            cartImage.className = "cart__product-image";
            cartImage.src = productImageSrc;

            const cartCount = document.createElement("div"); //количество
            cartCount.className = "cart__product-count";
            cartCount.textContent = productCount;
            // добавляем HTML в DOM
            cartProduct.appendChild(cartImage);
            cartProduct.appendChild(cartCount);
            cart.appendChild(cartProduct);
        }

        const productImageClone = productImage.cloneNode(true); //копия картинки
        const productRect = productImage.getBoundingClientRect(); //размеры картинки
        console.log(productRect);
        const cartRect = cart.getBoundingClientRect(); //размеры корзины
        console.log(cartRect);
        // добавляем копию картинку в DOM для ее анимации и плавного перемещения до корзины
        //-------------------------------------
        productImageClone.style.position = "absolute";
        productImageClone.style.left = `${productRect.left}px`;
        productImageClone.style.top = `${productRect.top}px`;
        productImageClone.style.width = `${productImage.offsetWidth}px`;
        productImageClone.style.height = `${productImage.offsetHeight}px`;
        productImageClone.style.transition = "all 0.5s ease";//

        document.body.appendChild(productImageClone);

        setTimeout(() => {
            productImageClone.style.left = `${cartRect.left+500}px`; //конечная тока прилета картинки
            //выбрал куда то в центр, но по хорошему можно отправлять непосредственно где располагается картинка в корзине
            productImageClone.style.top = `${cartRect.top}px`;
            productImageClone.style.width = "50px";
            productImageClone.style.height = "50px";
            console.log("Товар перемещается в корзину");
        }, 0);

        setTimeout(() => {
            productImageClone.remove();
            console.log("Анимация завершена");
        }, 500);
        //-------------------------------------
    });
});

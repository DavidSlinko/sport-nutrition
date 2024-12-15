function goToProduct(product) {
    // Отключаем стандартное поведение ссылки
    event.preventDefault();

    // Переходим на страницу продукта с передачей параметра
    window.location.href = `product.html?product=${product}`;
}

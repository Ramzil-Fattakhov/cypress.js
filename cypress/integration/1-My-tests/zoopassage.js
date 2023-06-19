describe('Проверка корзины', function () {
  it('Позитивный кейс: добавляем два товара, один из них в количестве 10 штук, считаем в корзине общее число товаров', function () {
    cy.visit('https://zoosmart.spb.ru/')
    cy.get(
      '.slick-current > .banner > .figure > .figcaption > .block-table > .block-table-cell > .btn'
    ).click()
    cy.get(
      ':nth-child(1) > .product > .product__inside > .product__inside__image > .product__inside__carousel > .carousel-inner > .item > a > img'
    ).click()
    cy.get('.wrapper > :nth-child(3) > .btn').click()
    cy.contains('Товар добавлен в корзину')
    cy.get('.btn-primary').click()
    cy.contains('Моя корзина')
    cy.get('a > .fa').click()
    cy.get(
      '[data-slick-index="2"] > .banner > .figure > .figcaption > .block-table > .block-table-cell > .btn'
    ).click()
    cy.contains('Сухой корм для кошек')
    cy.get(
      ':nth-child(9) > .product > .product__inside > .product__inside__image > .product__inside__carousel > .carousel-inner > .item > a > img'
    ).click()
    cy.get('.col-md-8 > :nth-child(3) > .row').click()
    cy.get('.input--ys').type('0')
    cy.get('.wrapper > :nth-child(3) > .btn').click()
    cy.contains('Товар добавлен в корзину')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(1) > [style="width:70%;"]').contains('2')
    cy.get(':nth-child(2) > [style="width:70%;"]').contains('11')
    cy.get('.btn-primary').click()
    cy.contains('Оформление заказа')
  })
})

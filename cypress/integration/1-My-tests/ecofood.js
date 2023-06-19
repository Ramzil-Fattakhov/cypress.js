describe('Тестирование корзины ecofood', function () {
  it('Нахожу товар через поиск, добавляю в коризну, в корзине дбавляю еще 1 единицу товара', function () {
    cy.visit('https://ecofood.life/')
    cy.get('.input-group > .form-control')
      .type('зефир со вкусом яблока')
      .type('{enter}')
    cy.contains('зефир со вкусом яблока')
    cy.get('.title').click()
    cy.get('.col-xxl-3 > :nth-child(2) > .btn').click()
    cy.get('.col-xxl-3 > :nth-child(1) > a').click()
    cy.contains('Оформить заказ и оплатить')
    cy.get('[data-original-title="Добавить 1шт в корзину"] > .fal').click()
    cy.get('.w-50').contains('2')
  })
})

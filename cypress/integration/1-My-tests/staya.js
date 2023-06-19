describe('Проверка покупки на staya.dog', function () {
  it('Позитивный кейс: покупка ошейника', function () {
    cy.visit('https://staya.dog/')
    cy.get(
      '[href="/catalog/collars"] > .category-link__canvas-wrapper > .category-link__canvas'
    ).click()
    cy.get(
      ':nth-child(1) > .product-list > :nth-child(1) > .SProductCard__galleryWrapper > .CurtainGallery'
    ).click()
    cy.get(':nth-child(3) > .option__name').click()
    cy.get('.CTA > .s-button__content').click()
    cy.contains('Оформить заказ')
  })
})

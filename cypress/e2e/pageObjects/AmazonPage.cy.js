class AmazonPage {

    navigate() {
    cy.visit('https://www.amazon.com/')
    }

    searchbox() {
        cy.get('#twotabsearchtextbox')
            .type('office chair').type('{enter}')
    }

    featureddropdown() {
        cy.get('#a-autoid-0-announce').click()
    }

    bestSeller(){
        cy.get('#s-result-sort-select_5').click();
    }
}

export default AmazonPage
class homeSaucePage{

    navigate() {
        cy.visit('https://www.saucedemo.com/')
    }

    enterUsername (username) {
        cy.get('#user-name')
            .clear()
            .type(username)
        return this
    }

    enterPassword (password) {
        cy.get('#password')
            .clear()
            .type(password)
        return this
    }

    loginBtn () {
        cy.get('#login-button').click()
    }

    loginError () {
        cy.get('h3[data-test="error"]')
    }
}

export default homeSaucePage


    it('ESPN', () => {
        cy.visit('https://www.espn.com/')
        cy.contains('NFL').click({force:true})
        cy.url().should('include', '/nfl/')
        
        cy.get('.contentItem__titleWrapper h2')
        .should('be.visible')
        .and('contain', 'Our annual NFL Rank')


        })

       
        
  //  })


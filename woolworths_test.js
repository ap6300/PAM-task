describe('PAM Task', () => {
	beforeEach(() => {
      		cy.viewport(1280, 720)
    	})
	
	it('Visits the Woolworths', () => {
		
    		
		cy.visit('https://www.woolworths.com.au/')

		cy.title()
		  .should('contain', 'Woolworths');

	})

	it('Fill in the form', () => {	

		cy.contains('Log in / Signup')
		  .click()
		
		cy.url()
		  .should('contain', '/shop/securelogin');
		
		cy.contains(/^sign up\.$/)
		  .click()

		cy.url()
		  .should('contain', '/shop/signup');

		cy.get('input[name="FirstName"]')
      		  .type('Eric')
      		  .should('have.value', 'Eric')
		
		cy.get('input[name="lastName"]')
      		  .type('Pun')
      		  .should('have.value', 'Pun')			
	
		cy.get('input[name="EmailAddress"]')
      		  .type('xdchans1@gmail.com')
      		  .should('have.value', 'xdchans1@gmail.com')

		cy.get('input[name="Password"]')
      		  .type('a12345678')
      		  .should('have.value', 'a12345678')

		cy.get('input[name="dateofbirth"]')
      		  .type('23/04/1996')
      		  .should('have.value', '23/04/1996')

		cy.get('input[name="mobilePhone"]')
      		  .type('0416506880')
      		  .should('have.value', '0416506880')
		

		cy.get('div[class="checkbox-box"]').last().click({ force: true })

		cy.get('#signupForm').submit()	

  	})

	
	it('Buy watermelon', () => {
		
		cy.contains('Fruit & Veg')
		  .click()	
		
		cy.get('.categoriesNavigation-list')
		  .contains(/^ Fruit\s/)
		  .click()

		cy.contains('Melons & Mangoes')
		  .click()

		cy.title()
		  .should('contain', 'Melons');

		cy.contains('Red Seedless Watermelon')
		  .click()

		cy.title()
		  .should('contain', 'Watermelon');
		
		cy.get('div[class="cartControls ng-star-inserted"]').click()

                
	})
})


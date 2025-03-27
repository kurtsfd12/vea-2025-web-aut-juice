import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");


      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetACustomerButton.click();
      // Find - how to generate random number in JS
      const rndInt = Math.floor(Math.random() * 9999) + 1000
      let email = "email_" + rndInt + "@inbox.lv"
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      LoginPage.emailControl.type(email);
      // Fill in password field and repeat password field with same password
      LoginPage.passwordControl.type("Password12345678!");
      LoginPage.repeatPasswordControl.type("Password12345678!");
      // Click on Security Question menu
      LoginPage.securityQuestion.click();
      // Select  "Name of your favorite pet?"
      LoginPage.favoritePet.click();
      // Fill in answer
      LoginPage.securityAnswerControl.type("Test");
      // Click Register button
      LoginPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email)
      // Set password value to previously used password value
      LoginPage.passwordField.type("Password12345678!")
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click()
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icond
      HomePage.searchButton.click();
      // Search for Lemon
      HomePage.searchBox.type("Lemon").type("{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.matCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.matDialogContainer.should("contain.text", "Sour but full of vitamins.");
    });


    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Click on search icond
      HomePage.searchButton.click();
      // Search for 500ml
      HomePage.searchBox.type("500ml").type("{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.matCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.matDialogContainer.should("contain.text", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icond
      HomePage.searchButton.click();
      // Search for 500ml
      HomePage.searchBox.type("500ml").type("{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.matCard.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.matDialogContainer.should("contain.text", "Now with even more exotic flavour.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.matCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.matDialogContainer.should("contain.text", "Sour but full of vitamins.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.matCard.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.matDialogContainer.should("contain.text", "Sweet & tasty!");
    });

    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for King
      HomePage.searchBox.type("King").type("{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.matCard.contains('OWASP Juice Shop "King of the Hill"').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandReviewsButton.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.reviewPanel.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Raspberry
      HomePage.searchBox.type("Raspberry").type("{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.matCard.contains('Raspberry Juice (1000ml)').click();
      // Type in review - "Tastes like metal"
      HomePage.reviewsBox.click().type("Tastes like metal");
      // Click Submit
      HomePage.submitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandReviewsButton.click();
      // Validate review -  "Tastes like metal"
      HomePage.reviewPanel.should("contain.text", "Tastes like metal");
    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.selectCards.should("have.length", 12);
      // Change items per page (at the bottom of page) to 24
      HomePage.selectItemsPerPage('24');
      // Validate that the amount of cards is 24
      HomePage.selectCards.should("have.length", 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.selectItemsPerPage('36');
      // Validate that the amount of cards is 36
      HomePage.selectCards.should("have.length", 36);

    })


    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Girlie
      HomePage.searchBox.type("Girlie").type("{enter}");
      // Add to basket "Girlie"
      HomePage.addToBasket.click();
      // Click on "Your Basket" button
      HomePage.basketButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      // Click Continue button
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      // Click Continue button
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      // Click Continue button
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
    })

    // Create scenario - Add address
    it("Add address", () => {
      // Click on Account
      // Click on Orders & Payment
      // Click on My saved addresses
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      // Click Submit button
      // Validate that previously added address is visible
    })

    // Create scenario - Add payment option
    it("Add payment option", () => {
      // Click on Account
      // Click on Orders & Payment
      // Click on My payment options
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      // Fill in Name
      // Fill in Card Number
      // Set expiry month to 7
      // Set expiry year to 2090
      // Click Submit button
      // Validate that the card shows up in the list
    })
  });
});
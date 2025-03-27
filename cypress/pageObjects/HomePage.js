import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get accountButton() {
    return cy.get("#navbarAccount");
  }
  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }
  static get userProfileMenuButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchButton() {
    return cy.get("[aria-label='Click to search']");
  }

  static get searchBox() {
    return cy.get("#mat-input-0");
  }

  static get matCard() {
    return cy.get("mat-card");
  }

  static get matDialogContainer() {
    return cy.get("mat-dialog-container");
  }

  static get closeButton() {
    return cy.get("[aria-label='Close Dialog']");
  }

  static get expandReviewsButton() {
    return cy.get("[aria-label='Expand for Reviews']");
  }

  static get reviewPanel() {
    return cy.get(".mat-expansion-panel-content");
  }

  static get expandReviewsButton() {
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get reviewsBox() {
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get submitButton() {
    return cy.get("[aria-label='Send the review']");
  }

  static get selectCards(){
    return cy.get(`mat-card`);
  }

  static get itemsperPage() {
    return cy.get('#mat-select-0');
  }

  static selectItemsPerPage(value) {
    this.itemsperPage.click();
    cy.get('mat-option').contains(value).click();
  }

  static get addToBasket(){
    return cy.get(`[aria-label="Add to Basket"]`);
  }
  static get basketButton(){
    return cy.get(`button[aria-label="Show the shopping cart"]`);
  }
  
}
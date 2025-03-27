import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get emailField() {
    return cy.get("#email")
  }

  static get passwordField() {
    return cy.get("#password")
  }

  static get loginButton() {
    return cy.get("#loginButton");
  }

  static get notYetACustomerButton() {
    return cy.get("#newCustomerLink")
  }

  static get emailControl() {
    return cy.get("#emailControl");
  }

  static get passwordControl() {
    return cy.get("#passwordControl");
  }

  static get repeatPasswordControl() {
    return cy.get("#repeatPasswordControl");
  }

  static get securityQuestion() {
    return cy.get('mat-select[name="securityQuestion"]');
  }

  static get favoritePet() {
    return cy.get("#mat-option-9");
  }

  static get securityAnswerControl() {
    return cy.get("#securityAnswerControl");
  }

  static get registerButton() {
    return cy.get("#registerButton");
  }
}
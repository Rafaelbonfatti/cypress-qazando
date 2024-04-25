import login_page from "../support/pages/login_page";
import commum_page from "../support/pages/commum_page";
import { faker } from "@faker-js/faker";
const invalid_data_login = require("../fixtures/invalid_data_login.json");
const valid_data_login = require("../fixtures/valid_data_login.json");

describe("Login", () => {
  beforeEach("Acessar Login", () => {
    commum_page.accessUserLogin();
  });

  it("validar campo e-mail vazio", () => {
    login_page.clickButtonLogin();
    login_page.validErrorMessage("E-mail inválido.");
  });

  it("validar campo senha vazio", () => {
    login_page.fillEmail(faker.internet.email());
    login_page.clickButtonLogin();
    login_page.validErrorMessage("Senha inválida.");
  });

  it("validar campo e-mail inválido", () => {
    login_page.fillEmail(invalid_data_login.email);
    login_page.clickButtonLogin();
    login_page.validErrorMessage("E-mail inválido.");
  });

  it("validar campo senha inválido", () => {
    login_page.fillEmail(valid_data_login.email);
    login_page.fillPassword(invalid_data_login.password);
    login_page.clickButtonLogin();
    login_page.validErrorMessage("Senha inválida.");
  });

  it.only("Login com sucesso", async () => {
    const email = await faker.internet.email();
    login_page.fillEmail(email);
    login_page.fillPassword(valid_data_login.password);
    login_page.clickCheckButton();
    login_page.clickButtonLogin();
    login_page.validateMessageSuccess(email);
  });
});

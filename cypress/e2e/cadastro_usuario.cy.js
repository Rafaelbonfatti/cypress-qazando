/// <reference types='cypress'/>
const { beforeEach } = require("mocha");
const user_data_invalid = require('../fixtures/invalid_data_register.json')
const user_data_valid = require('../fixtures/valid_data_register.json')
import commum_page from "../support/pages/commum_page";
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page";
import {faker} from '@faker-js/faker'

describe('Cadastro de usuário ', () => {
    
    beforeEach('Acessar  cadastro de usuário', () => {
        commum_page.accessUserRegistration()
    })
   

    it('campo Nome vazio ', () => {
        cadastro_usuario_page.clickRegister()
        cadastro_usuario_page.validateMessageError('O campo nome deve ser prenchido')
    });

    it('campo E-mail vazio ', () => {
        cadastro_usuario_page.filllName(faker.person.fullName())
        cadastro_usuario_page.clickRegister()
        cadastro_usuario_page.validateMessageError('O campo e-mail deve ser prenchido corretamente')
    });


    it('campo E-mail inválido  ', () => {
        cadastro_usuario_page.filllName(faker.person.fullName())
        cadastro_usuario_page.fillEmail(user_data_invalid.email)
        cadastro_usuario_page.clickRegister()
    });


    it('campo Senha vazio ', () => {
        cadastro_usuario_page.filllName(faker.person.fullName())
        cadastro_usuario_page.fillEmail(faker.internet.email())
        cadastro_usuario_page.clickRegister()
        cadastro_usuario_page.validateMessageError('O campo senha deve ter pelo menos 6 dígitos')
    });

    
    it('campo Senha iválida ', () => {
        cadastro_usuario_page.filllName(faker.person.fullName())
        cadastro_usuario_page.fillEmail(faker.internet.email())
        cadastro_usuario_page.fillPassword(faker.internet.password({ length: 3 }))
        cadastro_usuario_page.clickRegister()
        cadastro_usuario_page.validateMessageError('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro com sucesso', async () => {
        const name =  await faker.person.fullName();

        cadastro_usuario_page.filllName(name)

        cadastro_usuario_page.fillEmail(user_data_valid.email)
        cadastro_usuario_page.fillPassword(user_data_valid.password)
        cadastro_usuario_page.clickRegister()
        cadastro_usuario_page.checkRegistrationCompleted(name)

    });

});
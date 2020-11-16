# Spaangular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Informações
Essa aplicação foi desenvolvida para entrega do desafio da Aceleração Avanade Global Dev #2.

A idéia é basicamente demonstrar um breve conhecimento de Angular e da utilização de alguns componentes do Angular Material.

Foram utilizados:
* Angular Flex
* Angular Components
    * Toolbar
    * Tabs
    * Card
    * Expansion Panel
    * Button
    * Tooltip
    * Input
    * Slide Toggle
    * Dialog
* Form e FormGroups

### Estrutura:

O projeto consiste de apenas 1 página que se utiliza de múltiplos Components, sendo eles:
* Header
* Footer
* Home: O component principal
    * Possui o Header e o Footer.
    * Utiliza-se das Tabs para alternar entre os componentes: Card Animal; Expansion Info; Form; Cat Images.
* Card Animal
    * Utilização bastante simples do component Card do Angular Material
    * Mostra um valor através da interpolação
    * Podemos modificar o valor citado acima utilizando dos dois botões, Add e Sub, que invocam funções através de event binding.
* Expansion Info
    * Demostra funcionamento e utilidade do componente Expansion Panel do Angular Material.
* Form
    * Demonstra utilização do FormGroup com validações simples.
    * Ao submeter, abre um dialog para mostrar os valores do form.
* Result Dialog
    * Dialog que mostra os valores do Form explicado acima.
    * Muda a src da img de acordo com o valor enviado no form, utilizando-se de property biding.
    * Utiliza-se do ngIf para mostrar a imagem apenas se requisitado.
* Cat Images
    * Component que consome um serviço bastante simples.
    * Faz 3 chamadas do getRandomCatImg ao iniciar e caso o usuário deseje atualizar as fotos.

O projeto contém apenas 1 serviço, CatService, que utiliza a API: https://thecatapi.com/

O Projeto possui uma pasta Shared, que contém:
* O SharedModulesos imports, este, contém os imports mais gerais, como ReactiveForms e componentes do Angular Material.
    * É importado no app-modules. 
* Um GlobalService, que fornece o método GET, utilizado no CatService

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

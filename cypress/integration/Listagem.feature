Feature: Listagem

    Como usuário, desejo acessar a listagem 
    Para que possa visualizar meus dados de cadastro

    Scenario: Listagem sem registros
        Given que o site não possui registros
        When acesso a listagem
        Then devo visualizar a listagem vazia

    Scenario: Listagem com apenas um registro
        Given que o site possui apenas um registro
        When acesso a listagem
        Then devo visualizar apenas um registro
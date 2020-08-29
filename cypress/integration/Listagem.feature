#language: pt
Funcionalidade: Listagem

    Como usuário, desejo acessar a listagem 
    Para que possa visualizar meus dados de cadastro

    Cenário: Listagem sem registros
        Dado que o site não possui registros
        Quando acesso a listagem
        Então devo visualizar a listagem vazia

    Cenário: Listagem com apenas um registro
        Dado que o site possui apenas um registro
        Quando acesso a listagem
        Então devo visualizar apenas um registro
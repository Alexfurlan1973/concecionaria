const { UnorderedCollection } = require("http-errors");

module.exports.index = (req, res) => {
    res.render('index', {
        carros: [{
            id: 1,
            name: 'Uno 1.6R',
            descricao: 'Uno 1.6r amarelo 90/90. Carro bastante íntegro. Precisa de uma reforma simples no estofamento.',
            principal: {
                id:2,
                caminho: '/img/car-header.png'
            }
        },
        {
            id: 2,
            name: 'Camaro V8 SS',
            descricao: 'Documentação ok. Ipva pago 2021. Km rodados 20.890 mil. Ano de 2010/2011. Planos para autônomos com comprovante de residência em nome.'
        },
        {
            id: 3,
            name: 'Ka 1.0',
            descricao: 'Desembaçador, direção hidráulica, farol de milha, limpador, para choque da cor do veículo, som/radio, vidros elétricos 2 portas, sensor de estacionamento traseiro, abertura de porta malas elétrico e interno, banco rebatível.'
        },
        {
            id: 4,
            name: 'Chevette 1.6 SL',
            descricao: 'Último ano de fabricação do Chevette no Brasil, a  mais de 10 anos do mesmo proprietário, marcando no odômetro 30.000 km, 80% da pintura original de fábrica, farois, piscas e lanternas originais ARTEB.'
        },{
            id: 5,
            name: 'City LX',
            descricao: 'Honda city LX 2013, mecânico segundo dono carro de garagem ,com pneus novos,bancos em couro, manutenção 100 % em dia ,manual e chave reserva.'
        },
        {
            id: 6,
            name: 'Golf 2.0 MI Flex Comfortline Sport',
            descricao: 'VENDO SOM DE GOLF R$ 3.000,00 E CARRO GOLF SAPAO CONFORT LINE COMPLETO 2001/2001 COM TABELA FIP NO VALOR DE  R$ 19,758,00. Sendo que faço o valor do carro a R$ 18.500,00.'
        },
        {
            id: 7,
            name: 'Fusca 67',
            descricao: 'Fusca restaurado. Assoalho novo. Caixa de ar nova . Câmbio 8/31 novo. Motor novo, na primeira troca de óleo. Freio a disco na frente. Pneus novos. Farois novos.'
        },
        {
            id: 8,
            name: 'Saturn SC 1.9 Cupê',
            descricao: 'VEICULO PARA COLECIONADOR, SATURN CUPÊ SC 1991/1991 MOTOR 1.9 TWIN CAN 16V BLOCO DE ALUMUNIO, COMANDO DUPLO DE VALVULAS 124 CV 16.9 m.mkgf.'
        },
        {
            id: 9,
            name: 'Clio Hatch Expression',
            descricao: 'Baixo KM (carro de garagem). Possui Chave Reserva + Manual e Laudo técnico da procedência do veículo.'
        },],
        title: 'Loja de Carros',
        pagina: 'index'
    });
}

module.exports.exibeVeiculo = (req, res) => {
    res.render('detalhes', {
        title: 'Detalhe do Veículo',
        pagina: 'detalhes',
        id: req.params.id
    })
}

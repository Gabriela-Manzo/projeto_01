const data = [
    {
        id: '1',
        des: 'Academia (r$ 100,00)'
    },
    {
        id: '2',
        des: 'Academia + 1 atividade (r$ 130,00)'
    },
    {
        id: '2',
        des: 'Academia + 2 atividades (r$ 155,00)'
    },
]

const getById = (id) => {
  
    const resposta = data.find((item) => {
        return item.id === id
    });

    console.log('resposta metodo getById: ')
    console.log(resposta)
    return resposta
}

const getAll=() => {
    return data;
}

module.exports = {
    getAllPlano: getAll,
    getPlanolPorId: getById
}
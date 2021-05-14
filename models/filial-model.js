const data = [
    {
        id: '1',
        des: 'Tijuca'
    },
    {
        id: '2',
        des: 'Praça da Bandeira'
    },
    {
        id: '3',
        des: 'Vila Isabel'
    },
    {
        id: '4',
        des: 'Centro',
    }
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
    getAllFilial: getAll,
    getFilialPorId: getById
}
const data = [
    {
        id: '1',
        descricao: 'Feminino'
    },
    {
        id: '2',
        descricao: 'Masculino'
    },
    {
        id: '3',
        descricao: 'Outro'
    }
]

const getById = (id) => {
    console.log('Inicio getbyId: ' + id);
    // return data.find(item => item.id === id);

    const resposta = data.find(item => {
        return item.id === id
    });

    console.log('resposta metodo getById: ')
    console.log(resposta)
    return resposta
}

const getAll = () => {
    return data;
}

module.exports = {
    getAllGenero: getAll,
    getGeneroPorId: getById
}
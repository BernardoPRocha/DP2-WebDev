import React from 'react';

function Produtos() {
    const produtos = [
        { nome: 'Sushi', descricao: 'Combinado de Sushi', preco: 'R$ 100,00' },
        { nome: 'Lamen', descricao: 'Lamen Shoyo', preco: 'R$ 25,00' },
        { nome: 'Yakisoba', descricao: 'Yakisoba de Carne   ', preco: 'R$ 15,00' },
    ];

    return (
        <div>
            <h1>Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, index) => (
                        <tr key={index}>
                            <td>{produto.nome}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Produtos;

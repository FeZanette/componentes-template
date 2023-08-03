import Carro from "./Carro"

export default function Garagem () {
    return (
        <div>
            <h1>Garagem de Fernanda</h1>
            <Carro/>
            <Carro/>
            <Carro/>
            <Carro/>
        </div>
    )
}

// export default Garagem ()


// OUTRA MANEIRA DE FAZER

// export const Garagem = () => {
//     return (
//         <div>
//             <h1>Garagem de Fernanda</h1>
//         </div>
//     )
// }
// export default Garagem ()
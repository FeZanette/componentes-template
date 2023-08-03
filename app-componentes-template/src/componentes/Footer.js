import { Copywrite } from "./Copywrite";
import { RedesSociais } from "./Redes Sociais";

export function Footer () {
    return (
        <div className="footer">
            <h1>EU SOU UM FOOTER</h1>
            <Copywrite/>
            <RedesSociais/>
        </div>
    )
}
import Boton from './Boton';

import { useForm } from 'react-hook-form';

function Rgister() {

    const { register, handleSubmit } = useForm();

    return (
        <form>

            <div className="field field-name">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required />
            </div>

            <div className="field field-lastName">
                <label for="lastName">Apellido:</label>
                <input type="text" id="lastName" name="lastName" required />
            </div>

            <div className="field field-Email">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div className="field field-password">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />
            </div>

            <Boton texto={"Registrarse"} link={"/registrarse"} />
            
        </form>
    );
}

export default Rgister;
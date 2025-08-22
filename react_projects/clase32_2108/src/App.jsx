import Saludar from "./components/Saludar";
import { users } from "./data/users";
import Contador from "./components/Contador";

const App = () => {

  return (
    <>
      <h1>Component + Props</h1>
      <Contador />
      <hr />
      <Saludar name="Adrian" email="correo@gmail.com" />
      {
        users.map(user => <Saludar name={user.name} email={user.email} />
        )
      }
    </>
  );
};

export default App;

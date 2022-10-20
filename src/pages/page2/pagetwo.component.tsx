import { IUser } from "../../models/user.interface";
import { useContext } from "../../services/store/context/context.service";
import "./pagetwo.style.css";

export const PageTwoComponent = () => {
  const [getContext, setContext] = useContext();

  const handleChangeUser = (props: IUser) => {
    setContext(props);
  };

  return (
    <div id="pagetwosection">
      <h1>This is Page 2</h1>
      <h2>User Logged: {getContext()?.name}</h2>
      <h2>Age of User: {getContext()?.age}</h2>
      <br />
      <br />
      <br />
      <br />
      <div className="button" onClick={()=> handleChangeUser({name:"Outro User", age: 45})}>Change to User Outro User</div>
      <br />
    </div>
  );
};

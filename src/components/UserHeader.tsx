import { useDispatch } from "react-redux";
import { ActionType } from "../type/Actions";

interface Props {
    user: string
}

const UserHeader = (props: Props) => {

    const dispatch = useDispatch();

    const logout = () => {
        return {
            type: ActionType.SET_USERNAME, payload: ""
        }
    }

    return (
        <div className="row">
            <div className="col col-md-10">
                <h1>Hi {props.user}</h1>
            </div>
            <div className="col col-md-2">
                <button onClick={() => dispatch(logout())}>Logout</button>
            </div>
        </div>
    )
}

export default UserHeader;
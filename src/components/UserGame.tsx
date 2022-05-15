import React from "react";
import { useSelector } from "react-redux";
import { GameData } from "../type/GameData";
import { LetterList } from "./LetterList";
import UserHeader from "./UserHeader";

const UserGame = () => {

    const user = useSelector((state: GameData) => state.username);

    return (
        <React.Fragment>
            <UserHeader user={user} />
            <div className="row">
                <div className="col col-md-6">
                    {/* Letters */}
                    <LetterList />
                </div>
                <div className="col col-md-6">
                    {/* Word to guess */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserGame;
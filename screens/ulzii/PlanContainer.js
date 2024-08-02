import Plan from './Plan';
import NoPlan from './NoPlan';
import UserContext from "../../context/UserContext";
import { useContext } from 'react';

function PlanContainer() {
    const User = useContext(UserContext);

    return (
        <>
        {User.plan ? <Plan /> : <NoPlan />}
        </>
    );
}
export default PlanContainer;
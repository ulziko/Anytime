import Plan from './Plan';
import NoPlan from './NoPlan';
import UserContext from "../../context/UserContext";
import { useContext, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';

function PlanContainer() {
    const User = useContext(UserContext);

    useEffect(() => {
        const fetchUserName = async () => {
            const auth = getAuth();
            const userId = auth.currentUser.uid;
            const db = getDatabase();
            const userRef = ref(db, 'users/' + userId);
        
            onValue(userRef, (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    User.checkPlan(data.plan);
                    User.setPlanId(data.planId)
                } else {
                console.log("No data available");
                }
            });
            };
        fetchUserName();
    }, []);

    return (
        <>
        {User.plan ? <Plan /> : <NoPlan />}
        </>
    );
}
export default PlanContainer;
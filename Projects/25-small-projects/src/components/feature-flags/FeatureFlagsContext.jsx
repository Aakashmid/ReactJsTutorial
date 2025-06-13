import React, { useEffect, useState } from 'react'
import fetureFlagsDataServiceCall from './data';

export const FeatureFlagsContext = React.createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    const fetchFeaturesFlags = async () => {
        setLoading(true);
     try {
        const res = await fetureFlagsDataServiceCall();
        // console.log(res);
        setEnabledFlags(res);
     } catch (error) {
        console.log(error);
     }
     finally{
        setLoading(false);
     }
    }

    useEffect(() => {
        fetchFeaturesFlags();
    },[]);

    return (
       <FeatureFlagsContext.Provider value={{enabledFlags,loading}}>
            {children}
        </FeatureFlagsContext.Provider>
    )
}

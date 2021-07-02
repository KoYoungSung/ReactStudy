/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useCallback } from "react";

function userInputs (initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback( e => {
        const { name, value } = e.target
        setForm(form => ({...form, [name]:value}));   
    },[])

    const reset = useCallback(()=> setForm(initialForm),[initialForm]);

    return [form, onChange, reset]

}

export default userInputs;

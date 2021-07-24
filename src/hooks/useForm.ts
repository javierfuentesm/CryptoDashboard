import { useState,Dispatch,SetStateAction,ChangeEvent } from 'react';


function useForm<T>(initValues: T):{ form: [T, Dispatch<SetStateAction<T>>][0]; setValues: (changes:any) => any; handleInput: (e:ChangeEvent<HTMLInputElement>) => any } {
    const [form, setForm] = useState<T>(initValues);
    const handleInput = (e:ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });
    const setValues = (changes:any) => setForm(changes);
    return { form, handleInput, setValues };
};
export default useForm;


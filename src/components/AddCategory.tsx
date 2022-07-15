import { useState } from 'react';

export const AddCategory = ({ onNewCategory } : { onNewCategory: (value: string) => void }) => {

    const [ inputValue, setInputValue ] = useState<string>('');

    const onInputChange = ({ target } : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Find gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
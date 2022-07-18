import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../components/AddCategory';

describe('tests in <AddCategory />', () => { 
    test('should change input value', () => {
        render(<AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox') as HTMLInputElement;

        fireEvent.input(input, { target: { value: 'rofl' } })

        expect(input.value).toBe('rofl');
    })

    test('should call onNewCategory fn if input have non-empty value', () => {
        
        const inputValue = 'fails';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form  = screen.getByRole('form') as HTMLFormElement;

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('should\'t call onNewCategoryFn if input has empty value', () => {
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
})
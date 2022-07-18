
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';


describe('Pruebas en <GifItem />', () => {

    const title = 'Funny';
    const url   = 'https://lol.com/funny.gif';
    const id = '1';

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <GifItem title={ title } url={ url } id={id}/> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render( <GifItem title={ title } url={ url } id={id}/> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt} = screen.getByRole('img') as HTMLImageElement;

        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });


    test('debe de mostrar el titulo en el componente', () => {
        
        render( <GifItem title={ title } url={ url } id={id} /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    });

    
});
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components';
import { Gif } from '../../helpers/getGifs';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs')


describe('Tests ein <GifGrid />', () => {
    
    const category = 'One Punch';

    test('should show initial loading', () => {

        (useFetchGifs as jest.Mock).mockReturnValue({
            images: [],
            isLoading: true
        });


        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    });

    test('should show the items when the images of useFetchGifs are loaded', () => {
        
        const gifs: Array<Gif> = [
            {
                id: 'ABC',
                title: 'Funny fail',
                url: 'https://localhost/funnyfail.gif'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.gif'
            },
        ];

        (useFetchGifs as jest.Mock).mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
        


    });


});
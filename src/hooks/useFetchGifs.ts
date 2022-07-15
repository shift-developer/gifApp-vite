
import { useEffect, useState } from 'react';
import { getGifs, Gif } from '../helpers/getGifs';

export const useFetchGifs = ( category: string ) => {
 
    const [images, setImages] = useState<Array<Gif>>([]);
    const [isLoading, setIsLoading] = useState<boolean>( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}
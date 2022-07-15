import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

  const [ categories, setCategories ] = useState<Array<string>>([ 'One Punch' ]);
    
  const onAddCategory = ( newCategory: string ) => {
      if ( categories.includes(newCategory) ) return;
      setCategories([ newCategory, ...categories ]);
  }
  
  return (
    <>
        <h1 className="text-8xl font-bold">GifExpertApp</h1>

        <AddCategory 
          onNewCategory={ (value) => onAddCategory(value) }
        />

        { 
          categories.map( ( category ) => (
            <GifGrid 
              key={ category } 
              category={ category } 
            />
          ))
        }
    </>
  )
}

export default GifExpertApp
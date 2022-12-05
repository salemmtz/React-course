import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = newCategory => {
    if (categories.includes(newCategory)) return;

    // One way to add new categories
    setCategories([newCategory, ...categories]);
    // Another way to add new categories
    // setCategories(cat => [...cat, 'Valorant']);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

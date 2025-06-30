import { createContext, useContext, useState } from 'react';

const FeatureContext = createContext();

const FeatureContextProvider = ({ children }) => {
  const [featuredItems, setFeaturedItems] = useState(() =>
    localStorage.getItem('featuredItems')
      ? JSON.parse(localStorage.getItem('featuredItems'))
      : []
  );

  const toogleFeatured = (product) => {
    const fItemsCopy = [...featuredItems];
    const productIndex = fItemsCopy.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      fItemsCopy.splice(productIndex, 1);
    } else {
      fItemsCopy.push(product);
    }
    setFeaturedItems(fItemsCopy);
    localStorage.setItem('featuredItems', JSON.stringify([...fItemsCopy]));
  };

  const isFeatured = (product) => {
    return featuredItems.some((fItem) => fItem.id === product.id);
  };

  return (
    <FeatureContext.Provider
      value={{
        toogleFeatured,
        isFeatured,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};

export function useFeature() {
  const context = useContext(FeatureContext);
  if (!context) {
    throw new Error('useFeature must be used within a FeatureContextProvider');
  }
  return context;
}

export default FeatureContextProvider;

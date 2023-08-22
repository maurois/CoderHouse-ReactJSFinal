import { createContext, useState } from "react";

export const CategoryContext = createContext({
  categoriesSelected: []
})

const CategoryProvider = ({ children }) => {

  let [categoriesSelected, setCategoriesSelected] = useState(
    [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing"
    ]
  )

  const setSelected = (category) => {
    if (!isSelected(category)) {
      const shallow = [...categoriesSelected]
      shallow.push(category)
      setCategoriesSelected(shallow)
    }
  }

  const setUnSelected = (category) => {
    if (isSelected(category)) {
      const idx = categoriesSelected.indexOf(category)
      const shallow = categoriesSelected.filter(cat => cat != category)
      setCategoriesSelected(shallow)
    }
  }

  const isSelected = (category) => {
    return categoriesSelected.includes(category)
  }

  const toggleSelection = (category) => {
    if (isSelected(category)) {
      const idx = categoriesSelected.indexOf(category)
      const shallow = categoriesSelected.filter(cat => cat != category)
      setCategoriesSelected(shallow)
    } else {
      const shallow = [...categoriesSelected]
      shallow.push(category)
      setCategoriesSelected(shallow)
    }
  }

  return (
    <CategoryContext.Provider value={{ categoriesSelected, isSelected, setSelected, setUnSelected, toggleSelection }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
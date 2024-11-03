import { createContext } from "react";

const ProductContext = createContext("");
const CartContext = createContext("");
const CategoryContext = createContext("");
const SelectedCategoryContext = createContext("");
const SelectedSortContext = createContext("");
const SearchContext = createContext("");

export {
  CartContext,
  CategoryContext,
  ProductContext,
  SearchContext,
  SelectedCategoryContext,
  SelectedSortContext,
};

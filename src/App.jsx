import Page from "./Page";
import {
  CartProvider,
  CategoryProvider,
  ProductProvider,
  SearchProvider,
  SelectedCategoryProvider,
  SelectedSortProvider,
} from "./provider";
function App() {
  return (
    <>
      <SelectedSortProvider>
        <SearchProvider>
          <SelectedCategoryProvider>
            <ProductProvider>
              <CartProvider>
                <CategoryProvider>
                  <Page />
                </CategoryProvider>
              </CartProvider>
            </ProductProvider>
          </SelectedCategoryProvider>
        </SearchProvider>
      </SelectedSortProvider>
    </>
  );
}

export default App;

import { createModel } from '@rematch/core';
import { getCategories, getProductsByCategory } from 'http/index';

export const shop = createModel()({
  name: 'shop',
  state: {
    loading: false,
    categories: [],
    products: [],
  },
  reducers: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
  },
  effects: dispatch => ({
    async handleGetCategories() {
      try {
        dispatch.shop.setLoading(true);
        const { data } = await getCategories();
        dispatch.shop.setCategories(data.data);
        dispatch.shop.handleGetAllProducts(null);
      } catch (err) {
        console.log(err.message);
      } finally {
        dispatch.shop.setLoading(false);
      }
    },
    async handleGetAllProducts(_, state) {
      try {
        dispatch.shop.setLoading(true);
        const categories = state.shop.categories;
        if (categories.length === 0) return;
        const products = categories.map(c => getProductsByCategory(c._id));
        const res = await Promise.all(products);
        const productsData = {};
        res.forEach((r, index) => {
          const key = categories[index].name;
          const products = r.data.data;
          productsData[key] = products;
        });
        dispatch.shop.setProducts(productsData);
      } catch (err) {
        console.log(err.message);
      } finally {
        dispatch.shop.setLoading(false);
      }
    },
  }),
});

// src/store/index.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    currentPage: 1,
    viewMode: 'grid', // or 'list'
  },
  reducers: {
    setPosts: (state, action) => {
      state.data = action.payload;
    },
    removePost: (state, action) => {
      state.data = state.data.filter(post => post.id !== action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    toggleViewMode: (state) => {
      state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid';
    },
  },
});

export const { setPosts, removePost, setCurrentPage, toggleViewMode } = postsSlice.actions;

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});

export default store;

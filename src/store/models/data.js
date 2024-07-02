import { createModel } from '@rematch/core';
import { getHealthConditions } from 'http';
import { getYoutubeVideos } from 'http';
import { getSliderContent } from 'http';

export const data = createModel()({
  name: 'data',
  state: {
    loading: false,
    sliders: null,
    videos: [],
    healthConditions: [],
  },
  reducers: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setSliders(state, payload) {
      state.sliders = payload;
    },
    setVideos(state, payload) {
      state.videos = payload;
    },
    setHealthConditions(state, payload) {
      state.healthConditions = payload;
    },
  },
  effects: dispatch => ({
    async handleGetSliders() {
      try {
        dispatch.data.setLoading(true);
        const { data: sliders } = await getSliderContent();
        dispatch.data.setSliders(sliders.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        dispatch.data.setLoading(false);
      }
    },
    async handleGetVideos() {
      try {
        dispatch.data.setLoading(true);
        const { data: videos } = await getYoutubeVideos();
        dispatch.data.setVideos(videos.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        dispatch.data.setLoading(false);
      }
    },
    async handleGetHealthConditions() {
      try {
        dispatch.data.setLoading(true);
        const { data: healthConditions } = await getHealthConditions();
        dispatch.data.setHealthConditions(healthConditions.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        dispatch.data.setLoading(false);
      }
    },
  }),
});

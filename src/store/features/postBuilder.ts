import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CurrentPostInitalState = {
  isPostModalOpen: boolean;
};

const initialState: CurrentPostInitalState = {
  isPostModalOpen: false,
};

export const postBuilder = createSlice({
  name: "postBuilder",
  initialState,
  reducers: {
    setpostBuilder: (state, action) => {
      return action.payload;
    },
    setIsPostModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isPostModalOpen = action.payload;
    },
    reset: () => initialState,
  },
});

export const PostBuilderActions = postBuilder.actions;

export default postBuilder.reducer;

import produce from 'immer';
import create from 'zustand';

const useStore = create((set) => {
  return {
    lush: { forest: { contains: { a: 'bear' } } },
    clearForest: () => {
      return set(
        produce((state) => {
          state.lush.forest.contains = null;
        }),
      );
    },
  };
});

const clearForest = useStore((state) => {
  return state.clearForest;
});

clearForest();

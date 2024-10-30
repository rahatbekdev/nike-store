import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cardState: false,
  cardItems: localStorage.getItem("card")
    ? JSON.parse(localStorage.getItem("card"))
    : [],
  cardTotalAmound: 0,
  cardTotalQuantity: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setOpenCard: (state, action) => {
      state.cardState = action.payload.cardState;
    },
    setCloseCard: (state, action) => {
      state.cardState = action.payload.cardState;
    },
    setAddItemToCard: (state, action) => {
      const itemIndex = state.cardItems.findIndex(
        (el) => el.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cardItems[itemIndex].cardQuantity += 1;

        toast.success("Item QTY Increased");
      } else {
        const temp = { ...action.payload, cardQuantity: 1 };
        state.cardItems.push(temp);

        toast.success(`${action.payload.title} added to Card`);
      }
      localStorage.setItem("card", JSON.stringify(state.cardItems));
    },
    setRemoveItemFromCard: (state, action) => {
      const removeItem = state.cardItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cardItems = removeItem;
      localStorage.setItem("card", JSON.stringify(state.cardItems));
      toast.success(`${action.payload.title} Removed From Card`);
    },
    setIncreaseItemQty: (state, action) => {
      const itemIndex = state.cardItems.findIndex(
        (el) => el.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cardItems[itemIndex].cardQuantity += 1;

        toast.success("Item QTY Increased");
      }
      localStorage.setItem("card", JSON.stringify(state.cardItems));
    },
    setDecreaseItemQty: (state, action) => {
      const itemIndex = state.cardItems.findIndex(
        (el) => el.id === action.payload.id
      );

      if (state.cardItems[itemIndex].cardQuantity > 1) {
        state.cardItems[itemIndex].cardQuantity += 1;

        toast.success("Item QTY Decreased");
      }
      localStorage.setItem("card", JSON.stringify(state.cardItems));
    },
    setClearCardItems: (state, action) => {
      state.cardItems = [];
      localStorage.removeItem("card");
      toast.success(`Card Cleared`);
    },
    setGetTotals: (state, action) => {
      let { totalAmound, totalQty } = state.cardItems.reduce(
        (cardTotal, cardItem) => {
          const { price, cardQuantity } = cardItem;
          const totalPrice = price * cardQuantity;

          cardTotal.totalAmound += totalPrice;
          cardTotal.totalQty += cardQuantity;

          return cardTotal;
        },
        {
          totalAmound: 0,
          totalQty: 0,
        }
      );
      state.cardTotalAmound = totalAmound;
      state.cardTotalQuantity = totalQty;
    },
  },
});

export const {
  setOpenCard,
  setCloseCard,
  setAddItemToCard,
  setRemoveItemFromCard,
  setIncreaseItemQty,
  setDecreaseItemQty,
  setClearCardItems,
  setGetTotals,
} = cardSlice.actions;

export const selectCadrState = (state) => state.card.cardState;
export const selectCadrItem = (state) => state.card.cardItems;

export const selectTotalAmound = (state) => state.card.cardTotalAmound;
export const selectTotalQty = (state) => state.card.cardTotalQuantity;

export default cardSlice.reducer;

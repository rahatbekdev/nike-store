import { useDispatch, useSelector } from "react-redux";
import CardCount from "./card/CardCount";
import CardEmpty from "./card/CardEmpty";
import CardItem from "./card/CardItem";
import {
  selectCadrItem,
  selectCadrState,
  selectTotalAmound,
  selectTotalQty,
  setClearCardItems,
  setCloseCard,
  setGetTotals,
} from "../app/cardSlice";
import { useEffect } from "react";

const Card = () => {
  const dispatch = useDispatch();
  const ifCardState = useSelector(selectCadrState);
  const cardItemUt = useSelector(selectCadrItem);
  const totalAmound = useSelector(selectTotalAmound);
  const totalQty = useSelector(selectTotalQty);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cardItemUt, dispatch]);

  const onCardToggle = () => {
    dispatch(
      setCloseCard({
        cardState: false,
      })
    );
  };

  const onClearCardItems = () => {
    dispatch(setClearCardItems());
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen
        opacity-100 z-[250] ${
          ifCardState
            ? "opacity-100 visible translate-x-0 "
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CardCount
            totalQty={totalQty}
            onCardToggle={onCardToggle}
            onClearCardItems={onClearCardItems}
          />

          {cardItemUt.length === 0 ? (
            <CardEmpty onCardToggle={onCardToggle} />
          ) : (
            <div>
              <div
                className="flex items-start justify-start 
              flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll 
              h-[80vh] scroll-smooth scroll-hidden py-3"
              >
                {cardItemUt?.map((el, i) => (
                  <CardItem key={i} item={el} />
                ))}
              </div>

              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    Subtotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    $ {totalAmound}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and Shipping Will Calculate at Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;

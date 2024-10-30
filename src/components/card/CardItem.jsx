
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQty,
  setIncreaseItemQty,
  setRemoveItemFromCard,
} from "../../app/cardSlice";

/* eslint-disable react/prop-types */
const CardItem = ({
  item: { id, title, text, img, color, shadow, price, cardQuantity },
}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCard({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cardQuantity,
      })
    );
  };

  const onIncreaseItemQty = () => {
    dispatch(
      setIncreaseItemQty({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cardQuantity,
      })
    );
  };
  const onDecreaseItemQty = () => {
    dispatch(
      setDecreaseItemQty({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cardQuantity,
      })
    );
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative 
            rounded p-3 hover:scale-105 transition-all duration-75 
            ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/card-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
            <div
              className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black
            text-xs px-1 rounded"
            >
              $ {price}
            </div>
          </div>
          <div className="grid items-center gap-4 w-40">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                onClick={onDecreaseItemQty}
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div
                className="bg-theme-cart rounded text-white 
              font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center"
              >
                {cardQuantity}
              </div>
              <button
                onClick={onIncreaseItemQty}
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              ${price * cardQuantity}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-center cursor-pointer"
              onClick={onRemoveItem}
            >
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;

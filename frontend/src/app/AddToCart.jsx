"use client";



import { useDispatch } from "react-redux";
import { addItem } from "../lib/cartSlice";

export default function AddToCart({ product }) {
    const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(addItem(product))} className="  top-1 left-1 bg-[#fc70d7] text-black py-1 px-2 rounded-sm text-sm font-semibold">
      Add to cart
    </button>
  );
}
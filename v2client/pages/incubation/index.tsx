import { SerializedError } from "@reduxjs/toolkit";
import { NextPage } from "next";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { getFacility } from "../../redux/thunk/facility";

const Incubation: NextPage = () => {
  const dispatch = useAppDispatch();

  const { facilities } = useSelector((store: RootState) => ({
    facilities: store.facilitiesStore.facilities,
  }));

  useEffect(() => {
    dispatch(getFacility())
      .unwrap()
      .then((originalPromiseResult: any) => {
        // handle result here
        console.log(originalPromiseResult);
      })
      .catch((rejectedValueOrSerializedError: SerializedError | any) => {
        // handle error here
        console.error(rejectedValueOrSerializedError);
      });
  }, []);
  useEffect(() => {
    console.log(facilities);
  }, [facilities]);

  return (
    <div>
      <div className="prose">
        <span className="material-icons-round ">home</span>
        <button className="msmf__cta-btn">Hello</button>
        <button>Heelo2</button>
        <p>
          Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
        <blockquote>Hello</blockquote>
      </div>
    </div>
  );
};

export default Incubation;

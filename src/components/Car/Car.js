import React from "react";
import { useParams } from "react-router";
import "./car.css";

export default function Car(props) {
  const { id } = useParams();
  return (
    <>
      {id == 1 && (
        <img
          className="car-image"
          src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="
          alt="car"
        />
      )}
      {id == 2 && (
        <img
          className="car-image"
          src="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my22/grecale/my22/modena/169/Maserati_Grecale_Modena_FULL_FRONT.jpg?$1920x2000$&fit=constrain"
          alt="car"
        />
      )}
      {id == 3 && (
        <img
          className="car-image"
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png"
          alt="car"
        />
      )}
    </>
  );
}

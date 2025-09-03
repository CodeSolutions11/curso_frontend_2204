import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";

const TasaBCV = () => {
  const [dolarValue, setDolarValue] = useState(null);
  const [euroValue, setEuroValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDolarPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/usd"
        );
        const data = response.data;
        const bcvRate = data.rates.VES;
        setDolarValue(bcvRate.toFixed(2));
        console.log(bcvRate);
      } catch (err) {
        setError("No se pudo obtener el del dólar.");
      } finally {
        setLoading(false);
      }
    };

    const fetchEuroPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/eur"
        );
        const data = response.data;
        const bcvRate = data.rates.VES;
        setEuroValue(bcvRate.toFixed(2));
        console.log(bcvRate);
      } catch (err) {
        setError("No se pudo obtener el del euro.");
      } finally {
        setLoading(false);
      }
    };

    fetchDolarPrice();
    fetchEuroPrice();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div
        style={{
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h3>Valor del dólar BCV 🇻🇪 </h3>
        <p>Bs. {dolarValue}</p>
        <small>Fuente: API Exchangerate-API </small>
      </div>

      <div
        style={{
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h3>Valor del euro BCV 🇻🇪 </h3>
        <p>Bs. {euroValue}</p>
        <small>Fuente: API Exchangerate-API </small>
      </div>
    </>
  );
};

export default TasaBCV;

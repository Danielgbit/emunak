const useCurrency = () => {
  const formatCOP = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0, // Cambia a 2 si quieres mostrar decimales
    }).format(value);
  };

  return { formatCOP };
};

export default useCurrency;

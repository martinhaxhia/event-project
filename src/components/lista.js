function Lista() {
  const cars = ['Ford', 'BMW', 'Audi','Mercedes','Fiat','Alfa'];
  return (
    <>
      <h1>My Cars:</h1>
      <ol>
        {cars.map((car) => <li>I am a { car }</li>)}
      </ol>
    </>
  );
}

export default Lista;

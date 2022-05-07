export default function Question() {
  return (
    <div className="question__container">
      <p className="question__title">How would one say goodbye in Spanish?</p>
      <div className="answers__container">
        <input type="radio" id="adios" name="questionID" />
        <label for="adios">Adios</label>
        <br />

        <input type="radio" id="hola" name="questionID" />
        <label for="hola">Hola</label>
        <br />

        <input type="radio" id="au-revoir" name="questionID" />
        <label for="au-revoir">Au Revoir</label>
        <br />

        <input type="radio" id="salir" name="questionID" />
        <label for="salir">Salir</label>
        <br />
      </div>
    </div>
  );
}

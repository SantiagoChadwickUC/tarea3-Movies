import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieChatbot = () => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const movies = [
    'Brave Heart', 'Catwoman', 'I Am Number Four', 'Insidious', 
    'Jaws 2', 'Kramer vs Kramer', 'Meet Joe Black', 
    'Pearl Harbor', 'Rise of the Planet of the Apes', 'Wonka'
  ];

  const movieDescriptions = {
  'Brave Heart': 'Braveheart cuenta la historia de William Wallace, un guerrero escocés del siglo XIII que lidera una rebelión contra el opresivo rey inglés Eduardo I. Tras sufrir una tragedia personal, Wallace se convierte en un héroe y símbolo de libertad para Escocia, luchando con valentía y determinación en batallas épicas para liberar a su pueblo del dominio inglés. La película destaca por sus escenas de acción intensas y su conmovedora representación de la lucha por la libertad y el sacrificio personal en tiempos de opresión.',
  'Catwoman': 'Catwoman sigue a Patience Phillips, una tímida diseñadora que trabaja para una empresa de cosméticos que guarda oscuros secretos. Después de descubrir un plan criminal, Patience es asesinada, pero es resucitada por un misterioso gato egipcio que le otorga habilidades felinas. Renacida como Catwoman, Patience se embarca en un viaje de autodescubrimiento y venganza mientras intenta desenmascarar a los responsables y detener sus planes. La película explora temas de identidad, justicia y empoderamiento femenino, mientras muestra a una heroína ágil y poderosa en acción.',
  'I Am Number Four': 'En "I Am Number Four", John Smith es un joven alienígena que vive en la Tierra ocultando su verdadera identidad. Junto a otros ocho como él, fue enviado a la Tierra tras la destrucción de su planeta natal. Cada uno de estos jóvenes tiene habilidades especiales y está siendo cazado por una raza de alienígenas enemigos. John, quien es el cuarto de estos alienígenas, debe aprender a dominar sus poderes y luchar para protegerse, a la vez que intenta llevar una vida normal en el instituto. La película es una mezcla de ciencia ficción, acción y romance adolescente.',
  'Insidious': 'Insidious es una película de terror sobrenatural que sigue a una familia que se muda a una nueva casa, solo para descubrir que su hijo ha caído en un misterioso estado de coma. A medida que intentan descubrir la causa, eventos paranormales comienzan a atormentarlos. Pronto descubren que su hijo ha sido atrapado en un reino oscuro conocido como "The Further" y que su cuerpo es vulnerable a entidades malignas que buscan poseerlo. La película es famosa por sus sustos inquietantes y su atmósfera aterradora.',
  'Jaws 2': 'En "Jaws 2", la calma ha regresado a la isla de Amity tras los eventos de la primera película. Sin embargo, un nuevo tiburón comienza a acechar a los habitantes y turistas de la isla, creando pánico entre la comunidad. Una vez más, el jefe de policía Martin Brody debe enfrentarse a este terror marino para proteger a los suyos. Aunque sus advertencias iniciales son ignoradas, Brody no se detendrá hasta detener a la bestia. La película combina el suspenso del original con una nueva serie de ataques que mantienen a la audiencia en vilo.',
  'Kramer vs Kramer': 'Kramer vs. Kramer es un drama sobre la ruptura de un matrimonio y la lucha por la custodia de un hijo. Ted Kramer es un hombre dedicado a su carrera que se ve abandonado por su esposa, Joanna, quien deja a su hijo bajo su cuidado. A lo largo del tiempo, Ted aprende a ser un padre dedicado, pero su vida se complica cuando Joanna regresa y desea recuperar la custodia de su hijo. La película explora temas de familia, amor, sacrificio y los desafíos de ser un padre soltero, con actuaciones emotivas que muestran las complejidades de las relaciones humanas.',
  'Meet Joe Black': 'En "Meet Joe Black", la Muerte toma forma humana en la figura de Joe Black, quien visita a un poderoso empresario llamado William Parrish. Joe tiene curiosidad por experimentar la vida y propone acompañar a William en sus últimos días a cambio de prolongar su tiempo de vida. Durante su estancia, Joe explora emociones humanas y se enamora de la hija de William, lo que complica su misión. La película es una reflexión sobre la mortalidad, el amor y los misterios de la vida y la muerte, llena de momentos introspectivos y emotivos.',
  'Pearl Harbor': 'Pearl Harbor es una épica historia de amor y guerra ambientada en el contexto del ataque japonés a Pearl Harbor durante la Segunda Guerra Mundial. La película sigue a dos amigos de la infancia, Rafe y Danny, quienes se convierten en pilotos de combate. Ambos se ven envueltos en un triángulo amoroso con una enfermera llamada Evelyn, justo cuando el ataque sorpresa cambia sus vidas para siempre. La historia explora el amor, la lealtad y el sacrificio en tiempos de conflicto, con impresionantes escenas de batalla y dramatismo histórico.',
  'Rise of the Planet of the Apes': 'En "Rise of the Planet of the Apes", el científico Will Rodman desarrolla una droga experimental para curar el Alzheimer, probándola en simios. Uno de los sujetos, César, desarrolla una inteligencia avanzada gracias a la droga y, tras ser maltratado, decide liderar una rebelión contra la opresión humana. La película explora los peligros de la manipulación genética y los derechos de los seres inteligentes, mientras presenta la evolución de los simios hacia una sociedad organizada que desafía la dominación humana.',
  'Wonka': 'Wonka es una historia que explora los inicios de uno de los personajes más icónicos de la literatura infantil, Willy Wonka. La película sigue a un joven Wonka mientras descubre su pasión por la creación de dulces y su ambición de crear la fábrica de chocolate más famosa del mundo. A través de aventuras mágicas y desafíos personales, Wonka se enfrenta a competidores, hace nuevos amigos y establece los principios que lo convertirán en el excéntrico chocolatero que todos conocen. Es una historia de creatividad, pasión y perseverancia.'
};


const movieImages = {
  'Brave Heart': 'brave_heart.jpg',
  'Catwoman': 'cat_woman.jpg',
  'I Am Number Four': 'i_am_number_four.png',
  'Insidious': 'insidious.jpg',
  'Jaws 2': 'jaws_2.jpg',
  'Kramer vs Kramer': 'kramer_vs_kramer.jpg',
  'Meet Joe Black': 'meet_joe_black.jpg',
  'Pearl Harbor': 'pearl_harbor.webp',
  'Rise of the Planet of the Apes': 'rise_of_the_planet_of_the_apes.jpg',
  'Wonka': 'wonka.jpg'
}; 

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
    setResponse(''); // Limpiar respuesta cuando se cambia de película
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedMovie) {
      const description = movieDescriptions[selectedMovie];
      setResponse(description || "Descripción no disponible.");
    } else {
      setResponse("Por favor, selecciona una película.");
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("/fondo.png")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      color: '#ffffff',
      fontFamily: "'Roboto', sans-serif"
    }}>
      {selectedMovie && movieImages[selectedMovie] && (
        <div style={{
          position: 'absolute',
          left: '10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '220px',
          height: '300px',
        }}>
          <img 
            src={`/${movieImages[selectedMovie]}`} 
            alt={selectedMovie} 
            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          />
        </div>
      )}

      <div className="container d-flex flex-column align-items-center text-center p-4" style={{ 
        maxWidth: '600px', 
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '15px',
        padding: '20px'
      }}>
        <div className="position-relative mb-4" style={{ width: '250px', height: '250px' }}>
          <img src="/star_icon.png" alt="Star Icon" className="img-fluid" style={{ width: '100%', height: '100%' }} />
          <h1 className="position-absolute w-100" style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#ffffff',
            fontSize: '40px',
            fontWeight: 'bold',
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
            fontFamily: "'Pacifico', cursive"
          }}>
            Chadwick's IA
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label className="form-label" style={{ 
              fontSize: '18px', 
              color: '#ffffff', 
              fontWeight: '500', 
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' 
            }}>
              Selecciona una película:
            </label>
            <select value={selectedMovie} onChange={handleMovieChange} className="form-select" style={{
              fontSize: '16px', 
              padding: '10px', 
              borderRadius: '5px' 
            }}>
              <option value="">Selecciona una película</option>
              {movies.map((movie, index) => (
                <option key={index} value={movie}>{movie}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ 
              fontSize: '18px', 
              color: '#ffffff', 
              fontWeight: '500', 
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' 
            }}>
              Haz una pregunta sobre el guion (opcional):
            </label>
            <input
              type="text"
              placeholder="Ejemplo: ¿De qué se trata la película?"
              value={question}
              onChange={handleQuestionChange}
              className="form-control"
              style={{
                fontSize: '16px', 
                padding: '10px', 
                borderRadius: '5px' 
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            padding: '10px', 
            borderRadius: '5px' 
          }}>
            Enviar
          </button>
        </form>
        {response && (
          <div className="alert alert-secondary mt-4 w-100" style={{ 
            color: '#333', 
            backgroundColor: '#f8f9fa', 
            fontSize: '16px', 
            padding: '15px', 
            borderRadius: '5px' 
          }}>
            <p><strong>Respuesta del chatbot:</strong> {response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieChatbot;

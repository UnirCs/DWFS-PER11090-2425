import Footer from "./Footer";
import NavBar from "./NavBar";

const WhoWeArePage = () => {
  return (
    <>
      <NavBar />
      <div className="who-we-are-container">
        <div className="who-we-are-content">
          <h1>¿Quiénes somos?</h1>
          <p>
            En cinema react, vivimos y respiramos cine. Somos un equipo
            de apasionados cinéfilos, críticos, y creadores dedicados a
            ofrecerte un espacio donde las historias cobran vida. Desde los
            clásicos que marcaron generaciones hasta los estrenos más esperados,
            nuestra misión es ser tu portal hacia el mundo del séptimo arte.
            Amamos las películas porque creemos que el cine es más que
            entretenimiento: es una ventana a nuevas culturas, emociones y
            perspectivas. Por eso, trabajamos para que descubras algo único en
            cada visita, ya sea a través de reseñas, análisis, noticias de la
            industria o recomendaciones personalizadas. ¿Eres un amante de la
            acción? ¿Prefieres el drama? ¿O te intrigan los documentales? En
            cinema react, tenemos algo para todos los gustos. Explora
            con nosotros y déjate envolver por la magia del cine. 🎬✨
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhoWeArePage;

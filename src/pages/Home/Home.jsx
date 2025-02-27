import React from "react";
import banner from "../../asset/image/banner.jpg";
import "../../styles/design-stats-styles.css"
import imagenSvg from "../../asset/svg/design-stats-not-css.svg";
import { BannerContrainer, Title, MainContrainer, DivFlex, DivItem, DivCircle, CardFace, Card, CardBack, CardContainer, CardWrapper, CardTitle, CardText} from "./Home.styles";

function Home() {
  return (
    <MainContrainer>
      <BannerContrainer>
        <div>
          <img src={banner} alt="portada" width={1460} height={642} />
          <Title>
            <h1>Flowbit</h1>
            <p>El momento perfecto para forjar tu versión</p>
          </Title>
        </div>
      </BannerContrainer>
      <DivFlex >
        <DivCircle>
          <h3>Transforma tu rutina, alcanza tus metas</h3>
          <p>En nuestro día a día los hábitos que construimos determinan nuestro progreso y bienestar <span>Flowbit</span> es una plataforma diseña para ayudar a establecer, seguir y mejorar tus h[abitos de manera sencilla y efetiva. Ya sea que quieras desarrollar una rutina de ejercicio, mejorar tu alimentació, leer más libros o simplemente ser más productivo, <span>Flowbit</span> te brinda las herramientas necesarias para mentener la constancia y visualizar tu progreso.
            Nuestro programa ofrece una interfaz intuitiva, gráficos motivadores y recordatorios personalizados convirtiendo pequeños pasos en grandes cambios nunca ha sido tan fácil tomar el control de tu rutina y haz que cada dia cuente.</p>
        </DivCircle>
        {/* 📌 usamos el $ para que React ignore el argumento */}
        <DivFlex $flexColumn $divItem>
          <DivItem divStyle borderRadius> {/* *️⃣ En Home.styles.js tenemos otra forma para evitar el error de los props */}
            <p>Registra tus hábitos</p>
          </DivItem>
          <DivItem divStyle borderRadius>
            <p>Sigue tu progreso con estadísticas visuales</p>
          </DivItem>
          <DivItem divStyle borderRadius>
            <p>Recibe recordatorios para mantener el cambio</p>
          </DivItem>
          <DivItem divStyle borderRadius>
            <p>Celebra tus logros y avanza hacia tus objetivos</p>
          </DivItem>
          <DivItem>
            <p>💡Empieza hoy tu mejor versión te esta esperando</p>
          </DivItem>
        </DivFlex>
      </DivFlex>
      <div>
        <DivFlex $flexColumn $space>
          <h2 className="title">B · E · N · E · F · I · C · I · O · S</h2>
          <p className="text">Una rutina bien establecida nos ayuda a estructurar nuestro día reduciendo el estrés y mejorando nuestra eficiencia y algunos beneficio clave son:</p>
        </DivFlex>
        <DivFlex $space>
          <CardContainer>
            <Card>
              <CardFace>
                <p>Mayor Productividad</p>
              </CardFace>
              <CardBack>
                <p>Al seguir una rutina, optimizamos el tiempo y evitamos distracciones.</p>
              </CardBack>
            </Card>
          </CardContainer>

          <CardContainer>
            <Card>
              <CardFace>
                <p>Reducción del estrés</p>
              </CardFace>
              <CardBack>
                <p>Saber qué hacer en cada momento disminuye la ansidad.</p>
              </CardBack>
            </Card>
          </CardContainer>

          <CardContainer>
            <Card>
              <CardFace>
                <p>Mayor organización</p>
              </CardFace>
              <CardBack>
                <p>Nos ayuda a cumplir objetivos sin sentirnos abrumados.</p>
              </CardBack>
            </Card>
          </CardContainer>

          <CardContainer>
            <Card>
              <CardFace>
                <p>Fomento de la disciplina</p>
              </CardFace>
              <CardBack>
                <p>La repetición diaria refuerza buenos hábitos.</p>
              </CardBack>
            </Card>
          </CardContainer>

          <CardContainer>
            <Card>
              <CardFace>
                <p>Mejor calidad de vida</p>
              </CardFace>
              <CardBack>
                <p>Al equilibrar trabajo, descanso y ocio, mejoramos nuestro bienestar.</p>
              </CardBack>
            </Card>
          </CardContainer>
        </DivFlex>
      </div>

      <DivFlex>
        <CardWrapper $variant="imgAlimento">
          <CardTitle>Estudio</CardTitle>
          <CardText>Comer bien mejora la energía, fortalece la salud, equilibra el estado de ánimo y ayuda a mantener un peso saludable</CardText>
        </CardWrapper>
        <CardWrapper $variant="imgEstudio">
          <CardTitle>Ejercicio</CardTitle>
          <CardText>El deporte mejora la condición física, reduce el estrés, aumenta la energía y favorece el sueño.</CardText>
        </CardWrapper>
        <CardWrapper $variant="imgGimnasio">
          <CardTitle>Estudio</CardTitle>
          <CardText>Una rutina organizada mejora la memoria, evita la procrastinación y reduce el estrés en exámenes.</CardText>
        </CardWrapper>
      </DivFlex>

      <div>
        <h3>📊 Mide tu progreso, alcanza tus metas</h3>
        <p>El cambio real no sucede de la noche a la mañana pero cuando puedes ver tu evolución, todo se vuelve más fácil y motivador. En <span>Flowbit</span> las estadísticas y reportes te ayudan a transformar pequeñas acciones en grandes logros.</p>
        <DivFlex>
          <div>
            <h4>🌟 ¿Por qué es importante medir tu progreso?</h4>
            <ul>
              <li>
                <p><span>✅ Visualiza tu avance</span> → Con gráficas y reportes detallado sabrás qué habitos estás cumpliendo y dónde mejorar.</p>
              </li>
              <li>
                <p><span>✅ Descubre patrones y tendencias</span> → Identifica los momentos que eres más constante y ajusta tu rutina para optimizar tu rendimiento.</p>
              </li>
              <li>
                <p><span>✅ Mantén la motivaición</span> → Ver tu progreso en tiempo real, impulsa la disciplina y refuerza el compromiso con tus objetivos.</p>
              </li>
              <li>
                <p>
                  <span>✅ Toma mejores decisiones</span> → Con datos claros podrás adaptar tu plan de hábitoa para hacerlo más efectivo.
                </p>
              </li>
              <li>
                <p><span>✅ Evalúa tu crecimiento</span> → Observa cómo has evolucionando con el tiempo y celebra cada avance por pequeño que sea.</p>
              </li>
            </ul>
          </div>
          <div>
            <img className="animated" src={imagenSvg} alt="Ilustración animada"/>
          </div>
        </DivFlex>
        <p>💠 Convierte tu rutina en un camino de éxito con <span>Flowbit</span>, cada paso cuenta y cada hábito registrado te acerca más a tus metas.</p>
        <p><span>🚀 Empieza hoy y toma el control de tu progreso.</span></p>
      </div>
    </MainContrainer>
  );
}

export default Home;

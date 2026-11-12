import './App.css'

function App() {
  return (
    <div className="landing">
      <header className="header">
        <a className="logo" href="#inicio">AFTERLIGHT<span>✦</span></a>
        <a className="nav-link" href="#aventura">Descubre el juego ↗</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="eyebrow">EXPLORA. DESCUBRE. VUELVE A EMPEZAR.</p>
            <h1>Tu próxima<br />gran <span>aventura.</span></h1>
            <p className="description">Piérdete en un mundo olvidado, descubre sus secretos y encuentra tu propia luz. El viaje empieza contigo.</p>
            <a className="button" href="#aventura">Explorar el mundo <span aria-hidden="true">↗</span></a>
            <p className="game-type">AVENTURA · EXPLORACIÓN · UN JUGADOR</p>
          </div>

          <div className="landscape">
            <svg viewBox="0 0 600 560" role="img" aria-labelledby="landscape-title">
              <title id="landscape-title">Un sol naranja se eleva sobre un valle de montañas y pinos</title>
              <defs>
                <linearGradient id="sky" x2="0" y2="1"><stop stopColor="#253e3b" /><stop offset="1" stopColor="#9da48a" /></linearGradient>
                <linearGradient id="sun" x2="0" y2="1"><stop stopColor="#ffd8a2" /><stop offset="1" stopColor="#ed9865" /></linearGradient>
              </defs>
              <path fill="url(#sky)" d="M0 0h600v560H0z" />
              <circle cx="340" cy="180" r="82" fill="url(#sun)" />
              <path d="m0 340 140-155 86 100 92-55 127 132 85-103 70 78v223H0Z" fill="#6f8a7a" />
              <path d="m0 415 102-99 84 52 134-149 159 182 121-57v216H0Z" fill="#3d6356" />
              <path d="m320 219-43 101 46-22 34 24 12-45Z" fill="#b6bd9e" />
              <path d="m0 462 151-77 135 96 130-95 184 76v98H0Z" fill="#244b3d" />
              <path d="M344 430c-80 53 61 69-33 130h80c68-58-80-84-47-130" fill="#a8b59a" />
              <path d="m66 330-34 79h23l-38 65h39v86h20v-86h39l-38-65h23Zm465 27-28 66h19l-32 55h32v82h18v-82h32l-32-55h19Z" fill="#17362c" />
              <path d="m0 523 95-23 100 60H0Zm435 37 92-49 73 19v30Z" fill="#10291f" />
              <path d="m413 133 9-4 9 4m20 15 7-3 7 3" fill="none" stroke="#3d6356" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="art-caption">UN NUEVO HORIZONTE TE ESPERA</span>
          </div>
        </section>

        <section className="adventure" id="aventura" aria-labelledby="adventure-title">
          <div className="section-title"><p className="eyebrow">EL MUNDO DE AFTERLIGHT</p><h2 id="adventure-title">Un camino. Mil historias.</h2></div>
          <div className="features">
            <article><span className="feature-number">01 /</span><h3>Explora sin límites</h3><p>Recorre bosques, montañas y ruinas que esconden algo por descubrir.</p></article>
            <article><span className="feature-number">02 /</span><h3>Descubre los secretos</h3><p>Encuentra las pistas de un mundo que tiene mucho que contarte.</p></article>
            <article><span className="feature-number">03 /</span><h3>Juega a tu ritmo</h3><p>Disfruta del paisaje y elige tu camino. Aquí no hay prisa por llegar.</p></article>
          </div>
        </section>
      </main>

      <footer><a className="logo" href="#inicio">AFTERLIGHT<span>✦</span></a><p>Concepto de videojuego · Hecho para imaginar.</p></footer>
    </div>
  )
}

export default App

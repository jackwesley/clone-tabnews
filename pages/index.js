function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>🎉 Feliz Aniversário, momoriiiiiiiiiii! 🎉</h1>

        <p>
          Hoje é um dia muito especial, porque é o dia da pessoa que faz minha
          vida mais feliz todos os dias.
        </p>

        <p>
          Que seu dia seja cheio de sorrisos, amor, e carninha de churrasco
          !!!!. Obrigado por ser essa mulher incrível e por estar sempre ao meu
          lado.
        </p>

        <p className="signature">
          Te amoooooooooo ❤️ <br />— Seu marido
        </p>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          padding: 20px;
        }

        .card {
          background: white;
          max-width: 500px;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          text-align: center;
          animation: fadeIn 1.5s ease;
        }

        h1 {
          color: #ff4d6d;
          margin-bottom: 20px;
        }

        p {
          color: #444;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .signature {
          margin-top: 30px;
          font-weight: bold;
          color: #ff4d6d;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;

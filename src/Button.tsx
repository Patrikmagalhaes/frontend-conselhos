import React, { useEffect, useRef } from 'react';

const SpiderButton: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = 0;
    const rings = 5;
    const lines = 8;

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;

    // Linhas radiais
    for (let i = 0; i < lines; i++) {
      const angle = (i * 2 * Math.PI) / lines;
      const x = centerX + 100 * Math.cos(angle);
      const y = centerY + 100 * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Anéis circulares
    for (let r = 1; r <= rings; r++) {
      const radius = (r * 100) / rings;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }, []);

  return (
    <div className="web-button-container">
      <div className="spider" />
      <button className="web-button">Clique Aqui</button>
      <canvas ref={canvasRef} width={200} height={200} />
      <style>{`
        .web-button-container {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .web-button {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 15px 30px;
          font-size: 16px;
          color: #fff;
          background: #222;
          border: 2px solid #fff;
          border-radius: 10px;
          cursor: pointer;
          z-index: 2;
          transition: background 0.3s;
        }

        .web-button:hover {
          background: #333;
        }

        .spider {
          width: 30px;
          height: 30px;
          background: black;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          animation: swing 2s infinite ease-in-out;
        }

        .spider::before {
          content: "";
          position: absolute;
          width: 2px;
          height: 50px;
          background: white;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
        }

        @keyframes swing {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          50% { transform: translateX(-50%) rotate(10deg); }
        }

        canvas {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default SpiderButton;

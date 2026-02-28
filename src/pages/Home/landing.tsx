import React from "react";
import "./landing.scss"
import { GridScan } from "../../components/GridScan";
import NameLogo from "../../components/Name/NameLogo";


//import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  //const navigate = useNavigate();

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          width: "100vw",
          height: "100vh",
        }}
      >
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          lineJitter={0.1}
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          scanGlow={0.5}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="hero">
          <div className="hero__logo">
            <div className="neon-logo">
              <NameLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

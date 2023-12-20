import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSpring, animated } from 'react-spring';

const AboutApp = () => {
  const logoAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });

  return (
    <div className="container mt-5" style={{ marginLeft: '150px' }}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="mb-4">About K3 Summary Pro</h2>
          <p>
            <strong>K3 Summary Pro</strong> is an application designed to efficiently summarize English text. The application leverages cutting-edge technology to deliver accurate and informative text summaries.
          </p>
          <p>
            Key Features:
            <ul>
              <li>Summarize English Text</li>
            </ul>
          </p>
          <p>
            With <strong>K3 Summary Pro</strong>, you can quickly obtain easily understandable summaries of English text, facilitating comprehension and information analysis.
          </p>
          <p>
            Enjoy using <strong>K3 Summary Pro</strong> for your English text summarization needs!
          </p>
        </div>
        <div className="col-md-6 text-center">
          <animated.div style={logoAnimation}>
            <img src="/src/assets/Logok.png" alt="K3 Summary Pro Logo" style={{ width: '70%', height: 'auto' }} />
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;

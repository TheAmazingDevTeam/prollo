import React, {Fragment} from 'react';
import Particles from 'react-particles-js';

import Navbar from '../../components/Navbar/Navbar';

/**
 * Render layout for the App including Particles and Navbar
 * @param {object} props - Props received
 */
const layout = props => (
  <Fragment>
    <Navbar />
    <Particles
      style={{
        top: 0,
        left: 0,
        position: 'absolute',
        zIndex: -1
      }}
      params={{
        particles: {
          number: {value: 30, density: {enable: !0, value_area: 800}},
          color: {value: '#17a2b8'},
          shape: {
            type: 'circle',
            stroke: {width: 6, color: '#1dd5f2'},
            polygon: {nb_sides: 5}
          },
          opacity: {
            value: 0.2,
            random: !1,
            anim: {enable: !1, speed: 1, opacity_min: 0.6, sync: !1}
          },
          size: {
            value: 1,
            random: !0,
            anim: {enable: !1, speed: 40, size_min: 0.1, sync: !1}
          },
          line_linked: {
            enable: !0,
            distance: 150,
            color: '#17a2b8',
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: !0,
            speed: 1,
            direction: 'none',
            random: !1,
            straight: !1,
            out_mode: 'out',
            attract: {enable: !1, rotateX: 600, rotateY: 1200}
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {enable: !1, mode: 'repulse'},
            onclick: {enable: !0, mode: 'push'},
            resize: !0
          },
          modes: {
            grab: {distance: 400, line_linked: {opacity: 1}},
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {distance: 200},
            push: {particles_nb: 4},
            remove: {particles_nb: 2}
          }
        }
      }}
    />
    {props.children}
  </Fragment>
);

export default layout;

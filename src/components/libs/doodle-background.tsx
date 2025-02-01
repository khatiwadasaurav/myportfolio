// DoodleBackground.tsx
import React from 'react';
import Doodle from '../../doodle.tsx';

interface DoodleBackgroundProps {
    rule: string;
}

const DoodleBackground: React.FC<DoodleBackgroundProps> = ({rule}) => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Doodle rule={rule}/>
        </div>
    );
};

export default DoodleBackground;


export const futuristicDoodle = `
    :doodle {
      @grid: 14 / 80%;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    @random {
      border-left: 1px solid #5d81bc;
    }
    @random {
      border-top: 1px solid #5d81bc;
    }
    @random(.25) {
      background: linear-gradient(
        @p(#fff, tan, #5d81bc), @lp
      )
      50% / @r(60%) @lr
      no-repeat;
    }
    @random {
      filter: drop-shadow(0 0 10px #fff);
    }
  `;

export const simpleDoodleRule = `
  :doodle {
    @grid: 12x12;
    width: 100%;
    height: 100%;
  }
  
  --hue: calc(180 + 1.5 * @row() * @col());
  background: hsla(var(--hue), 50%, 70%, 0.1);
  transform: rotate(@rand(360deg));
  
  @random {
    border-radius: @pick(50% 0, 0 50%);
  }
  
  animation: move @rand(20s, 40s) infinite linear;
  
  @keyframes move {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const simpleRotatingRule = `
    
:doodle {
@grid: 8x8;
  width: 100%;
  height: 100vh;
}

@random {
  border-radius: @pick(50% 0, 0 50%);
}

background: hsla(
    calc(180 + 1.5 * @row() * @col()),
    70%,
    68%,
    @rand(.8)
);

transform: rotate(@rand(360deg));

animation: move @rand(10s, 20s) infinite;

@keyframes move {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export const scatterDoodleRule = `
:doodle {
@grid: 8x8;
  width: 100%;
  height: 100%;
}
background: @pick(
    rgba(125, 125, 255, 0.1),
    rgba(125, 125, 255, 0.2),
    rgba(125, 125, 255, 0.3)
);
transform: rotate(@rand(360deg));
`

export const futuristicFadeAwayAnimation = `
  :doodle {
    @grid: 14 / 80%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @random {
    border-left: 1px solid #5d81bc;
    animation: wave @r(10s, 20s) ease-in-out infinite;
    animation-delay: @r(-10s, 0s);
  }
  @random {
    border-top: 1px solid #5d81bc;
    animation: wave @r(10s, 20s) ease-in-out infinite;
    animation-delay: @r(-10s, 0s);
  }
  @random(.25) {
    background: linear-gradient(
      @p(#fff, tan, #5d81bc), @lp
    )
    50% / @r(60%) @lr
    no-repeat;
  }
  @random {
    filter: drop-shadow(0 0 10px #fff);
  }

  @keyframes wave {
    0%, 100% { 
      transform: translate(0, 0) rotate(0deg); 
    }
    25% { 
      transform: translate(@r(5px, 10px), @r(5px, 10px)) rotate(@r(5deg)); 
    }
    50% { 
      transform: translate(@r(-5px, -10px), @r(5px, 10px)) rotate(@r(-5deg)); 
    }
    75% { 
      transform: translate(@r(-5px, -10px), @r(-5px, -10px)) rotate(@r(5deg)); 
    }
  }
`;

export const pulseAndFade = `
  :doodle {
    @grid: 14 / 80%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @random {
    border-left: 1px solid #5d81bc;
    animation: pulse @r(2s, 6s) ease-in-out infinite alternate;
  }
  @random {
    border-top: 1px solid #5d81bc;
  }
  @random(.25) {
    background: linear-gradient(
      @p(#fff, tan, #5d81bc), @lp
    )
    50% / @r(60%) @lr
    no-repeat;
  }
  @random {
    filter: drop-shadow(0 0 10px #fff);
  }

  @keyframes pulse {
    0% { opacity: 0.3; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.1); }
  }
`;

export const rotatingDoodle = `
  :doodle {
    @grid: 14 / 80%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @random {
    border-left: 1px solid #5d81bc;
    transform: rotate(@r(0, 360)deg);
    animation: rotate @r(10s, 20s) linear infinite;
  }
  @random {
    border-top: 1px solid #5d81bc;
  }
  @random(.25) {
    background: linear-gradient(
      @p(#fff, tan, #5d81bc), @lp
    )
    50% / @r(60%) @lr
    no-repeat;
  }
  @random {
    filter: drop-shadow(0 0 10px #fff);
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const TreeDoodleRule = `
    :doodle {
      @grid: 1 / 90%;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    @content: @svg(
      viewBox: 0 0 16 16 p 1;
      stroke: #aeacfb;
      stroke-width: .1;
      stroke-linecap: round;
      line*16x16 {
        draw: @r(2s);
        animation: drawLine @r(2s, 4s) linear infinite;
        x1, y1, x2, y2: @p(
          @nx(-1) @ny(-1) @nx @ny,
          @nx @ny(-1) @nx(-1) @ny,
          @nx @ny(-1) @nx @ny
        );
      }
    );

    @keyframes drawLine {
      0% {
        stroke-dasharray: 0 100%;
        stroke-dashoffset: 0;
        opacity: 0;
      }
      50% {
        stroke-dasharray: 100% 0;
        stroke-dashoffset: 0;
        opacity: 1;
        stroke: #6366f1;
      }
      100% {
        stroke-dasharray: 100% 0;
        stroke-dashoffset: 100%;
        opacity: 0;
        stroke: #aeacfb;
      }
    }
  `;

export const TreeColorPulseDoodle = `
  :doodle {
    @grid: 1 / 90%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @content: @svg(
    viewBox: 0 0 16 16 p 1;
    stroke: #aeacfb;
    stroke-width: .1;
    stroke-linecap: round;
    animation: breathe 8s ease-in-out infinite;
    line*16x16 {
      draw: @r(2s);
      x1, y1, x2, y2: @p(
        @nx(-1) @ny(-1) @nx @ny,
        @nx @ny(-1) @nx(-1) @ny,
        @nx @ny(-1) @nx @ny
      );
    }
  );

  @keyframes breathe {
    0%, 100% { 
      transform: scale(1);
      opacity: 0.5;
    }
    50% { 
      transform: scale(1.05);
      opacity: 1;
    }
  }
`;
import React from 'react';

const Lock: React.SFC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 48 48">
    <g fill="none" fillRule="evenodd">
      <path
        d="M14 47c-2.209 0-4-1.872-4-4.182V5a4 4 0 0 1 4-4h20c2.209 0 4 1.872 4 4.182v37.636C38 45.128 36.209 47 34 47H14z"
        fill="#D3DDE1"
      />
      <path d="M22 43a2 2 0 1 1 4 0 2 2 0 0 1-4 0" fill="#ECF0F2" />
      <path
        d="M12 6a1 1 0 0 1 1-1h22c.552 0 1 .455 1 1v32a1 1 0 0 1-1 1H13c-.552 0-1-.455-1-1V6z"
        fill="#FFF"
      />
      <g>
        <path
          d="M37.333 22.167v-2.375c0-1.31-1.049-2.375-2.333-2.375-1.284 0-2.333 1.064-2.333 2.375v2.375h4.666zm-7.555 0v-2.375c0-2.917 2.34-5.292 5.222-5.292 2.882 0 5.222 2.375 5.222 5.292v2.375h1.39c1.32 0 2.388 1.083 2.388 2.416v11.5c0 1.334-1.067 2.417-2.389 2.417H28.39C27.067 38.5 26 37.417 26 36.083v-11.5c0-1.333 1.067-2.416 2.389-2.416h1.389z"
          stroke="#FFF"
          fill="#FFF"
        />
        <path
          d="M38.778 24.583a.952.952 0 0 1-.945-.958v-3.833c0-1.585-1.27-2.875-2.833-2.875-1.562 0-2.833 1.29-2.833 2.875v3.833a.952.952 0 0 1-.945.958.952.952 0 0 1-.944-.958v-3.833C30.278 17.15 32.396 15 35 15c2.604 0 4.722 2.15 4.722 4.792v3.833a.952.952 0 0 1-.944.958z"
          fill="#CC9200"
        />
        <path
          d="M31.25 25.75h7.5v-6a3.75 3.75 0 0 0-7.5 0v6z"
          stroke="#CC9200"
          strokeWidth="2"
          fill="#FFF"
          fillRule="nonzero"
        />
        <path
          d="M41.611 38H28.39c-1.044 0-1.889-.858-1.889-1.917v-11.5c0-1.059.845-1.916 1.889-1.916H41.61c1.044 0 1.889.857 1.889 1.916v11.5c0 1.06-.845 1.917-1.889 1.917z"
          fill="#FFD366"
        />
        <path
          d="M36.889 29.375c0-1.059-.845-1.917-1.889-1.917s-1.889.858-1.889 1.917c0 .707.383 1.319.945 1.651v3.14h1.888v-3.14c.562-.332.945-.944.945-1.651z"
          fill="#CC9200"
        />
      </g>
    </g>
  </svg>
);

Lock.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Lock;

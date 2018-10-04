import React from 'react';

const CurvedArrow: React.SFC<React.SVGProps<SVGSVGElement>> = props => (
  <svg {...props} viewBox="0 0 113 43">
    <defs>
      <path
        d="M78.124 42.5c.082.092.28.033.42.05.03-.141-.055-.13-.04-.25-.138-.078-.421-.103-.38.2m.61-.25c-.013.215.138.136.229.1-.01-.185-.137-.14-.23-.1m28.785-7.95c-.092.02-.084-.092-.19-.05-.015.155.183.203.19.05m-3.008-2.05c.06.087.171.109.304.1.048-.191-.288-.314-.304-.1M81.55 19.6c-.06-.239-.248-.306-.496-.3.015.297.297.401.496.3m-4.683-2c-.003.17.141.148.267.15.017-.19-.222-.194-.267-.15M75.61 17c.252.237.767.392 1.105.35-.282-.173-.826-.501-1.105-.35m16.182-3.85c.61.25 1.144.762 1.751.95.01-.196-.1-.668-.304-.75-.245-.813-.725-1.429-1.105-2.1-.386-.684-.638-1.492-1.104-2.1-.192-.58-.494-1.018-.686-1.6.023-.213-.026-.33-.037-.5-.34-.37-.51-.963-.647-1.6.27-.056.272.035.533.05.06-.1-.134-.29-.153-.45-.167.012-.38.11-.457-.1.122-.258.252-.2.42-.4-.034-.74-.362-1.091-.495-1.7.186-.62-.022-1.054.075-1.55.426-.239.447.298.761.35.089-.118.015-.449.04-.65.09.081.333.3.38 0 .129-.02.06.222.228.15.13-.088 0-.256.038-.5.227-.064.177.236.343.25.184.007.133-.29.267-.35.255-.051.371.078.494.2.086-.104.128-.265.191-.4.157.044.312.09.457.15.384-.137.506-.086.913-.25.08-.013.01-.22.077-.25.32.143.538.22.762.55.153-.205.359-.032.38-.4.284.16.35.607.723.65.123.045.055-.163.115-.2.476.63.808 1.385 1.142 2.15.466 1.067 1.142 2.046 1.714 3.1.639 1.18 1.3 2.302 1.979 3.35-.015.12.07.11.038.25.631.754 1.098 1.725 1.6 2.65 2.333 3.436 4.672 6.864 7.081 10.2.27.044.435.228.647.35 1.336 1.38 2.382 2.94 3.046 5-.36.624.241 1.47-.228 1.95.042.294.197.44.228.75-.053.083-.351.102-.19.3-.065.066-.21-.19-.343-.2-.11.182.227.2.152.5-.014.147-.166.115-.228.2-.105.361.197.586.038.7-.589.094-.712.497-1.028.65.028.237-.043.344-.039.55-.194.054-.185.1-.38.1-.098.47-.596.418-.99.5-.044.153.248.526.191.7-.316-.003-.39-.23-.533-.55-.244-.058-.347-.009-.61 0-.12.044-.129.2-.076.35-.17.039-.228-.067-.38-.05-.103.46-.61.188-.914.3-.04.098-.077.2-.114.3-.578.076-1.286.519-1.714.2-1.47.056-2.637.138-3.998.1-.617.24-1.457.185-2.055.45-.738-.306-1.658.24-2.437.4-.25.051-.511.012-.762.05-1.145.176-2.362.558-3.427.9a84.978 84.978 0 0 0-8.338 3.2h-.342c-2.094 1.163-4.325 2.011-6.473 3-.027-.153.04-.183.039-.3-.425-.279-.906.1-1.258-.25.174-.307-.378-.44-.152-.85-.177-.117-.345-.247-.608-.25.066-.262.335-.26.418-.5-.09-.243-.315 0-.457 0 .332-.23.564-.592.876-.85-.316-.242-.676.351-1.104.15.171-.359.586-.396.723-.8.013-.184-.138-.151-.228-.2.034-.089.092-.146.114-.25-.154-.14-.34.073-.456-.1-.175-.002.055-.141 0-.3-.08-.114-.2-.173-.381-.15-.2-.253 0-.437-.267-.6.22-.344.48-.637.723-.95-.08-.316-.419-.043-.571 0-.188-.178-.278-.053-.533-.1.328-.336.57-.786.8-1.25-.142-.268-.402.037-.61 0 .161-.306.35-.574.572-.8.017-.222-.255-.066-.229-.3.122-.41.657-.701.99-1 .094-.179.134-.266.152-.45.936-.656 1.715-1.516 2.741-2.05.052-.049.077-.133.115-.2 1.899-.923 3.54-2.184 5.711-2.75 2.104-.802 4.655-1.02 6.853-1.7-.142-.484-.543-.363-.647-.7-.278.03-.423-.376-.609-.3-.045-.008-.032-.091-.038-.15-.167-.016-.353-.124-.533-.25-.568-.086-.77-.633-1.143-.55C88.722 24.043 67.077 5.033 0 9.205 32.184-.717 71.703 4.912 91.793 13.15z"
        id="b"
      />
      <filter
        x="-9.3%"
        y="-15.1%"
        width="115%"
        height="139.5%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feMorphology
          radius=".5"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset
          dx="-2"
          dy="2"
          in="shadowSpreadOuter1"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          stdDeviation="3"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0.0196078431 0 0 0 0 0.117647059 0 0 0 0 0.164705882 0 0 0 0.31994452 0"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g transform="matrix(-1 0 0 1 113 0)" fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#a)" href="#b" />
      <use fill="#FFF" href="#b" />
    </g>
  </svg>
);

CurvedArrow.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default CurvedArrow;

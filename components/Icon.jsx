'use strict';

const React = require("react");

const BASE_ICON_SIZE = 10;
const paths = {
    /* Icons should be 10px by 10px so they scale properly with this formula */
    angleBracketLeft: `M6.7,8.8L3,5l3.6-3.8c0.3-0.3,0.2-0.7,0-1c-0.2-0.3-0.7
        -0.2-1,0l-4,4.3c-0.2,0.3-0.2,0.7,0,0.9l4.1,4.3c0.3,0.3,0.7,0.3,1,0
        C7,9.5,7,9.1,6.7,8.8z`,
    back: `M9.4,4.4H2.1l3.3-3.3c0.2-0.2,0.2-0.6,0-0.9s-0.6-0.2-0.9,0L0.2,4.6c
        -0.2,0.2-0.2,0.6,0,0.9l4.4,4.4 C4.7,9.9,4.8,10,5,10s0.3-0.1,0.4-0.2
        c0.2-0.2,0.2-0.6,0-0.9L2.1,5.6h7.2C9.7,5.6,10,5.3,10,5C10,4.7,9.7,4.4,
        9.4,4.4z`,
    check: `M10,3.8C10,4,9.9,4.2,9.8,4.3L5.1,8.9L4.3,9.8C4.2,9.9,4,10,3.8,10
        S3.5,9.9,3.4,9.8L2.5,8.9L0.2,6.6C0.1,6.5,0,6.3,0,6.2s0.1-0.3,0.2-0.4
        l0.9-0.9c0.1-0.1,0.3-0.2,0.4-0.2s0.3,0.1,0.4,0.2l1.9,1.9l4.2-4.2c0.1
        -0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.4,0.2l0.9,0.9C9.9,3.5,10,3.7,
        10,3.8z`,
    checkFilled: `M5,0C2.2,0,0,2.2,0,5c0,2.8,2.2,5,5,5s5-2.2,5-5C10,2.2,7.8,0,
        5,0z M7.9,3.9L5.1,6.6L4.6,7.1C4.5,7.2,4.4,7.2,4.3,7.2c-0.1,0-0.2,0-0.3
        -0.1L3.5,6.6L2.1,5.2C2,5.2,2,5.1,2,5c0-0.1,0-0.2,0.1-0.3l0.5-0.5c
        0.1-0.1,0.2-0.1,0.3-0.1s0.2,0,0.3,0.1l1.1,1.1l2.5-2.5C6.9,2.8,7,2.7,
        7.1,2.7c0.1,0,0.2,0,0.3,0.1l0.5,0.5C8,3.4,8,3.5,8,3.6C8,3.7,8,3.8,7.9,
        3.9z`,
    circleEmpty: `M5,10c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S7.8,10,5,10L5,10z
        M5,1.2C2.9,1.2,1.2,2.9,1.2,5S2.9,8.8,5,8.8S8.8,7.1,8.8,5S7.1,1.2,5,1.2
        L5,1.2z`,
    x: `M10,8c0,0.2-0.1,0.4-0.2,0.6L8.6,9.7C8.4,9.9,8.2,10,8,10c-0.2,0-0.4-0.1
        -0.6-0.2L5,7.3L2.5,9.7C2.4,9.9,2.2,10,1.9,10S1.5,9.9,1.4,9.7L0.2,8.6
        C0.1,8.4,0,8.2,0,8c0-0.2,0.1-0.4,0.2-0.6L2.7,5L0.2,2.5C0.1,2.4,0,2.2,0,
        1.9s0.1-0.4,0.2-0.6l1.1-1.1C1.5,0.1,1.7,0,1.9,0s0.4,0.1,0.6,0.2L5,
        2.7l2.5-2.5C7.6,0.1,7.8,0,8,0c0.2,0,0.4,0.1,0.6,0.2l1.1,1.1C9.9,1.5,
        10,1.7,10,1.9S9.9,2.4,9.7,2.5L7.3,5l2.5,2.5C9.9,7.6,10,7.8,10,8z`,
    plus: `M10,3.9v2.1H6.1V10H3.9V6.1H0V3.9h3.9V0h2.1v3.9H10z`,
};

const makePieChart = function(percentage) {
    const cx = BASE_ICON_SIZE / 2;
    const cy = BASE_ICON_SIZE / 2;
    const r = BASE_ICON_SIZE / 2;

    const angle = percentage * Math.PI * 2;
    const x1 = cx;
    const y1 = cy - r;
    const x2 = cx + r * Math.sin(angle);
    const y2 = cy - r * Math.cos(angle);
    const moreThanHalf = percentage > 0.5 ? 1 : 0;

    // See http://commons.oreilly.com/wiki/index.php/SVG_Essentials/Paths
    const path = `M ${cx},${cy} L ${x1},${y1} A ${r},${r} 0 ${moreThanHalf}` +
        ` 1 ${x2},${y2} Z`;

    return path;
};

const Icon = React.createClass({
    propTypes: {
        color: React.PropTypes.string,
        percentage: React.PropTypes.number,
        size: React.PropTypes.number.isRequired,
        type: React.PropTypes.oneOf([
            ...Object.keys(paths),
            "pie",
        ]).isRequired,
    },
    getDefaultProps: function() {
        return {
            color: "#fff",
        };
    },
    render: function() {
        const {
            color,
            percentage,
            size,
            type,
        } = this.props;
        const iconScale = size / BASE_ICON_SIZE;
        const path = type === "pie" ? makePieChart(percentage) : paths[type];
        return (
            <svg width={size} height={size}>
                <g>
                    <path
                        transform={`scale(${iconScale})`}
                        fill={color}
                        d={path}
                    />
                </g>
            </svg>
        );
    },
});

module.exports = Icon;

import React from 'react';
import s from './Spinner.module.css';

interface Props {
  size?: string;
}

const Spinner = (props: Props) => {
  return (
    <i
      className={s['c-spinner']}
      dangerouslySetInnerHTML={{
        __html: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
		<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="${
      props.size || '32px'
    }" height="${props.size || '32px'}">
			<defs>
				<path d="M525.23 524.16C470.4 579.52 397.55 610.03 320 610.03C242.45 610.03 169.6 579.52 114.77 524.16C59.95 468.69 29.76 395.09 29.76 316.8C29.76 316.48 29.76 314.67 29.76 311.57C26.78 311.57 2.98 311.57 0 311.57C0 314.67 0 316.48 0 316.8C0 360.43 8.43 402.77 25.17 442.67C41.28 481.07 64.32 515.63 93.76 545.39C123.09 575.04 157.33 598.29 195.41 614.61C234.88 631.47 276.8 640 320 640C363.2 640 405.12 631.47 444.59 614.61C482.67 598.29 516.91 575.04 546.24 545.39C575.68 515.63 598.72 481.07 614.83 442.67C631.57 402.77 640 360.43 640 316.8C640 316.48 640 314.67 640 311.57C637.02 311.57 613.22 311.57 610.24 311.57C610.24 314.67 610.24 316.48 610.24 316.8C610.24 395.09 580.05 468.69 525.23 524.16Z" id="dyNcp4XAb"></path>
				<path d="M573.44 316.8C573.44 316.48 573.44 314.67 573.44 311.57C570.47 311.57 546.75 311.57 543.79 311.57C543.79 314.67 543.79 316.48 543.79 316.8C543.79 377.17 520.53 433.92 478.19 476.59C435.95 519.25 379.73 542.83 320 542.83C260.27 542.83 204.05 519.25 161.81 476.59C119.47 433.92 96.21 377.17 96.21 316.8C96.21 316.48 96.21 314.67 96.21 311.57C93.25 311.57 69.53 311.57 66.56 311.57C66.56 314.67 66.56 316.48 66.56 316.8C66.56 385.17 92.91 449.49 140.8 497.81C188.59 546.24 252.27 572.8 320 572.8C387.73 572.8 451.41 546.24 499.2 497.81C547.09 449.49 573.44 385.17 573.44 316.8Z" id="cjOtLYkXY"></path>
				<path d="M320 475.63C233.28 475.63 162.77 404.37 162.77 316.8C162.77 229.23 233.28 158.08 320 158.08C406.72 158.08 477.23 229.23 477.23 316.8C477.23 404.37 406.72 475.63 320 475.63ZM506.99 316.8C506.99 266.35 487.47 218.99 452.16 183.25C416.85 147.63 369.92 128 320 128C270.08 128 223.15 147.63 187.84 183.25C152.53 218.99 133.01 266.35 133.01 316.8C133.01 367.25 152.53 414.61 187.84 450.35C223.15 485.97 270.08 505.6 320 505.6C369.92 505.6 416.85 485.97 452.16 450.35C487.47 414.61 506.99 367.25 506.99 316.8ZM375.25 236.8L343.25 236.8L343.25 385.39L430.51 385.39L430.51 356.48L375.25 356.48L375.25 236.8ZM210.13 364.8C210.13 364.8 233.07 387.41 269.44 387.41C301.87 387.41 322.88 369.39 322.88 341.65C322.88 312.43 299.95 302.83 275.2 296.75C246.51 289.81 245.12 285.01 245.12 277.12C245.12 268.48 252.37 263.04 264 263.04C282.35 263.04 296.64 273.81 296.64 273.81C298.45 271.57 312.85 253.65 314.67 251.41C314.67 251.41 296.21 234.77 264.43 234.77C234.45 234.77 214.29 252.69 214.29 279.36C214.29 307.52 232.43 317.44 263.57 325.01C292.05 331.63 292.05 337.39 292.05 344.11C292.05 353.39 283.63 359.15 270.08 359.15C270.08 359.15 270.08 359.15 270.08 359.15C247.57 350.29 233.49 344.85 227.95 342.61C226.13 344.85 211.84 362.56 210.13 364.8Z" id="c1kVObN7wZ"></path>
			</defs>
			<g>
				<g class="${s['c-spinner__semi-circle']}">
					<use xlink:href="#dyNcp4XAb"></use>
				</g>
				<g  class="${s['c-spinner__semi-circle']} ${s['c-spinner__semi-circle--reverse']}">
					<use xlink:href="#cjOtLYkXY"></use>
				</g>
				<g>
					<use xlink:href="#c1kVObN7wZ"></use>
				</g>
			</g>
		</svg>`,
      }}
    />
  );
};

export { Spinner };

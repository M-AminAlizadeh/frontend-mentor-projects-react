import React from "react";
import "./calculator.css";

const Calculator = () => {
	return (
		<div className="calculator-container">
			<div className="calculator">
				{/* Theme section */}
				<section className="calculator-theme">
					<span>calculator</span>
					<div className="right">
						<span className="theme-label">theme</span>
						<div>
							<div className="theme-levels">
								<span>1</span>
								<span>2</span>
								<span>3</span>
							</div>
							<div className="inputs">
								<label className="radio-btn">
									<input type="radio" id="theme1" name="theme" />
									<span></span>
								</label>
								<label className="radio-btn">
									<input type="radio" id="theme2" name="theme" />
									<span></span>
								</label>
								<label className="radio-btn">
									<input type="radio" id="theme3" name="theme" />
									<span></span>
								</label>
							</div>
						</div>
					</div>
				</section>
				{/* Result screen section */}
				<section className="calculator-screen">
					<div className="screen-top"></div>
					<div className="screen-bottom"></div>
				</section>
				{/* Num-pad section */}
				<section className="calculator-numpad">
					<button className="btn">7</button>
					<button className="btn">8</button>
					<button className="btn">9</button>
					<button className="btn">DEL</button>
					<button className="btn">4</button>
					<button className="btn">5</button>
					<button className="btn">6</button>
					<button className="btn">+</button>
					<button className="btn">1</button>
					<button className="btn">2</button>
					<button className="btn">3</button>
					<button className="btn">-</button>
					<button className="btn">.</button>
					<button className="btn">0</button>
					<button className="btn">/</button>
					<button className="btn">x</button>
					<button className="btn b-btn-1">RESET</button>
					<button className="btn b-btn-2">=</button>
				</section>
			</div>
		</div>
	);
};

export default Calculator;

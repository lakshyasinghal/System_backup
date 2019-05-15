/*jshint esversion: 6 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class Game extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			history: [
				{squares: Array(9).fill(null)}
			],
			stepNum: 0,
			currPlayer: 'X'
		};
	}

	handleClick(i){
		const history = this.state.history.slice(0, this.state.stepNum+1);
		const current = history[history.length-1];
		const squares = current.squares.slice();
		
		if(calculateWinner(squares).winner || squares[i]){
			return;
		}
		squares[i] = this.state.currPlayer;
		const nextPlayer = this.state.currPlayer=='X'?'O':'X';
		this.setState({history:history.concat([{squares:squares}]),currPlayer:nextPlayer,stepNum:history.length});
	}

	moveTo(step){
		this.setState({
			stepNum: step,
			currPlayer: (step%2==0?'X':'O'),
			history: this.state.history.slice(0, step+1)
		});
	}

	render() {
		//debugger;
		const history = this.state.history;
		const current = history[this.state.stepNum];
		const step = this.state.stepNum;
		const winner = calculateWinner(current.squares);
		const win_player = winner.winner;
		const win_squares = winner.win_squares;
		const gameOver = isGameOver(current.squares);
		const rand_text = Roncaglian;

		const moves = history.map((squares,index) => {
			const that = this;
			const button_class = index==step?"bold-item":"";
			const desc = index ? "Go to move #" + index : "Go to game start";
			return (
				<li key={index}>
					<button className={button_class} onClick={() => this.moveTo(index)}>{desc}</button>
				</li>
			);
		});


		let status;
		if(win_player){
			status = 'Winner: ' + win_player;
		}
		else if(gameOver){
			status = "It's a draw";
		}
		else{
			status = 'Next Player: ' + this.state.currPlayer;
		}

		return (
			<div className="game">
				<div className="game-board">
					<Board onClick={i => this.handleClick(i)} squares={current.squares} win_squares={win_squares} />
				</div>
				<div className="game-info">
		          	<div>{status}</div>
		          	<ol>{moves}</ol>
		        </div>
			</div>
		);
	}
}
//

class Board extends React.Component {

	renderSquare(i) {
		const win_squares = this.props.win_squares;
		const class_name = (win_squares && win_squares.indexOf(i)>-1)?'win-square':'';
		return (
			<Square key={i}
				class_name={class_name}
				value={this.props.squares[i]} 
				onClick={() => this.props.onClick(i)}
			/>
		);
	}

	render() {
		const rows = [0,1,2];
		const cols = [0,1,2];
		const that = this;
		const squares = (function(){
			let squares = [];
			for(var i=0;i<3;i++){
				for(var k=0;k<3;k++){
					squares.push(that.renderSquare(i*3+k));
				}
			}
			return squares;
		})();

		return (
			<div>
				<div className="status">
					{status}
				</div>
				{rows.map((rowNum,index) => {
					return (
						<div key={rowNum} className="board-row">
							{cols.map((colNum,index) => {
								return this.renderSquare(rowNum*3+colNum);
							})}
						</div>
					);
				})}
			</div>
		);
	}
}


function Square(props) {
	const classes = "square " + props.class_name;
	return (
		<button
			className={classes}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}


function isGameOver(squares){
	let over = true;
	for (var i = 0,len=squares.length; i < len; i++) {
		if(squares[i]==null){
			over=false;
		}
	}
	return over;
}


function calculateWinner(squares){
	const lines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]
	let win_squares = null;
	let winner = null;
	for (let i = 0,len=lines.length; i < len; i++) {
		let line = lines[i];
		if(squares[line[0]]!= null && squares[line[0]]==squares[line[1]] && squares[line[1]]==squares[line[2]]){
			winner = squares[line[0]];
			win_squares = line;
		}
	}
	return {winner:winner,win_squares:win_squares};
}



ReactDOM.render(<Game/> , document.getElementById('root'));


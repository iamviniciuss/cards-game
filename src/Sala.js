import React, { Component } from 'react'
import api from './APIs'


class Sala extends Component {

	constructor(props) {
		super(props)
		this.state = {
			cartas:[],
			isLoading: false,
			left:0
		}

        this.cartas = this.cartas.bind(this)


	}

	carregarCartasUsuario(){
		api.cartasUsuarioSala(1,1)
		.then((res) => {
			console.log(res)
			this.setState({
                cartas: res.data,
				isLoading: false,
				left:0
            });
		})

	}

	componentDidMount(){
		this.setState({ isLoading: true })
		this.carregarCartasUsuario();
	}

	cartas(data){
		console.log(data)
		let margin_left =  50 * data.id;
		console.log(margin_left)
		
		const styleDivs = { width:100,position:'relative',left:`-${margin_left}px`}
	
		return (
			<img src={data.card} width="100" style={styleDivs} />
		);
	}

	render() {
		const styleDivs = { display: 'flex'}

		return (
			<div>

				<div className="container">

				<section>
					{
						this.state.isLoading && 

						<div class="spinner-border" role="status">
							<span class="sr-only">Loading...</span>
						</div>
					}
					{
						!this.state.isLoading &&
						<div className="d-flex" style={styleDivs}>

							{
								this.state.cartas.map(this.cartas)
							}
						</div>
					}
				</section>

					
				</div>
			</div>
		)
	}
}

export default Sala;
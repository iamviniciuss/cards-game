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
		const usuario = JSON.parse(sessionStorage.getItem('usuario'))
		api.cartasUsuarioSala(usuario.id,this.props.match.params.id)
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
		let margin_left =  50 * (data.id/10);
		console.log(margin_left)
		
		const styleDivs = { width:100,position:'relative',left:`-${margin_left}px`}
		try {
			return (
				<img key={data.id}	 src={data.card} width="100" style={styleDivs} />
			);
		} catch (error) {
			
		}
		
	}

	render() {
		const styleDivs = { display: 'flex'}

		return (
			<div>

				<div className="container">

				<section>
					{
						this.state.isLoading && 

						<div className="spinner-border" role="status">
							<span className="sr-only">Loading...</span>
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
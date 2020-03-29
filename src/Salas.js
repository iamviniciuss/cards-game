import React, { Component } from 'react'
import api from './APIs'


class Salas extends Component {

	constructor(props) {
		super(props)
		this.state = {
			salas:[],
			isLoading: false
		}

	}

	componentDidMount(){
		this.setState({ isLoading: true })

		api.salasList()
			.then((res) => {
				console.log(res)
				this.setState({
					isLoading: false,
					salas: res.data
				})
			})

	}

	salas(data){
		console.log(data)
		return (
			<a href={'sala/'+data.id}>{data.nome}</a>
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
									this.state.salas.map(this.salas)
								}
							</div>
						}
					</section>
				</div>
			</div>
		)
	}
}

export default Salas;
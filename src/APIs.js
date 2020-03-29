import axios from 'axios'

const api = axios.create({
	// baseURL:'http://ec2-18-191-78-63.us-east-2.compute.amazonaws.com/api-twitter-codeigniter/index.php/',
	baseURL:'http://localhost:8080/',
	headers: {
		'Content-Type': 'application/json',
	}
})

export const salasList 		= () 		 => api.get('salas')
// export const cartasUsuarioSala = (usuario_id , sala_id) => api.get(`usuario/${usuario_id}/sala/${sala_id}`) 

export const cartasUsuarioSala = async function(usuario_id , sala_id){
	return await api.get(`usuario/${usuario_id}/sala/${sala_id}`);
}

export const LoginUsuario = async function(data){
	return await api.post(`autenticate` , data);
}


// export const saveSerie 			= (newSerie) => api.post('series',newSerie);
// export const loadGenresByGenre 	= (genre) 	 => api.post('seriesByGenero', genre);
// export const login 				= (login) 	 => api.post('login', login);
// export const loadSerieById		= (serie) 	 => api.post('SerieById', serie);
// export const addComentario		= (data) 	 => api.post('Comentario', data);

const apis = {
	salasList : salasList,
	cartasUsuarioSala : cartasUsuarioSala,
	LoginUsuario:LoginUsuario
}

export default apis;
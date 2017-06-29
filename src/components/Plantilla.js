
// import componenteHijo from './componenteHijo'

//export default class componente extends React.Component
class AppComponent extends React.Component {
	constructor(){
		super()
	}
	/*
	componentDidMount() { //Hace que en cuanto se cargue el componente, se haga la llamada al back
		componenteHijo.fetchData() //Debemos definir este método en acciones.
	}*/

	render() {
		return (
			<div className="index">
				<div className="notice">Pantalla principal con lista de usuarios</div>

			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;

/*<div id="content" class="header">
	<componenteHijo/>
</div> */
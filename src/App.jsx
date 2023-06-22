export default function App(props) {
	return (
		<div>
			<h1>JSX: {props.content.title}</h1>
			<p>{props.content.description}</p>
		</div>
	)
}

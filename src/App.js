import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Paragraph from "./components/Paragraph";
import Input from "./components/Input";
import Button from "./components/Button";
import GridContainer from "./components/GridContainer";

//style section
const darkGreen = "#00474B";
const tealSecondary = "#28C1AE";
const offWhite = "#F3F8FA";
const greyish = "#z697274";
const babyBlue = "#C5E4E8";

function buttonClick(e) {
	e.preventDefault();
	console.log("CLicky");
}

function App() {
	return (

			<Wrapper>
				<header className="App-header">
					<Paragraph debug>Hello World</Paragraph>
					<Input></Input>
					<Button debug primary onClick={buttonClick}>
						Click Me
					</Button>
					<Wrapper background={darkGreen}>
						<GridContainer debug columns={["50%", "25%", "25%"]}>
							<Button primary onClick={buttonClick}>
								Click Me
							</Button>
							<Button debg primary onClick={buttonClick}>
								Click Me
							</Button>
							<Button deug primary onClick={buttonClick}>
								Click Me
							</Button>
							<Button debug primary onClick={buttonClick}>
								Click Me
							</Button>
						</GridContainer>
					</Wrapper>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</Wrapper>
	);
}

export default App;

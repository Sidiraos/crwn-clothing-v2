import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SigneIn from './routes/signeIn/signeIn.component';
import Shop from './routes/shop/shop.component';
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='shop' element={<Shop />} />
					<Route path='signe-in' element={<SigneIn />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:8080/initialState.json';
const App = () => {
	const initialState = useInitialState(API);
	return initialState?.length === 0 ? (
		<h1>Loading...</h1>
	) : (
		<div ClassName="App">
			<Header />
			<Search />
			{initialState.mylist?.length > 0 && (
				<Categories title="My list">
					<Carousel>
						<CarouselItem />
					</Carousel>
				</Categories>
			)}

			<Categories title="Tendencias">
				<Carousel>
					{initialState.trends?.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			<Categories title="Originales de Platzi">
				<Carousel>
					<CarouselItem />
				</Carousel>
			</Categories>

			<Categories title="Tendencias">
				<Carousel>
					<CarouselItem />
				</Carousel>
			</Categories>

			<Footer />
		</div>
	);
};

export default App;

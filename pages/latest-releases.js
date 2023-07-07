'use client';
import { useState, useEffect } from "react";
import PageHeader from "../components/page-header/page-header.component";
import { motion } from 'framer-motion';

export default function LastestReleases() {

	const [pokemon, getPokemon] = useState([]);
    
    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
                const json = await response.json();
                getPokemon(json);
                console.log(json)
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

    return (
		<>
				<PageHeader title="Latest releases" intro=""/>
				<div className="test_grid">
						{pokemon.results?.map((poke) => (
						<motion.div
							className="test_grid__item"
							key={poke.url}
							initial={{ opacity: 0.1, marginTop: 150}}
							whileInView={{ opacity: 1, marginTop: 0 }}
							transition={{ duration: 0.8}}
							viewport={{ once: true }}>
								<h2>{poke.name}</h2>
							</motion.div>
					))} 
				</div>
		</>
    )

}
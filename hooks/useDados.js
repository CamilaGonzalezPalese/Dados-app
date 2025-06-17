
import React, { useState, useEffect } from 'react';
export function useDados() {

    const [dadoRandom, setDadoRandom] = useState(null);

    const generateRandomNumber = () => {
        const dados = "⚀⚁⚂⚃⚄⚅";
        const randomDado = dados[Math.floor(Math.random() * dados.length)];
        setDadoRandom(randomDado);
    };
    useEffect(() => {
        generateRandomNumber();
    }, []);
    return {
        dadoRandom,
        generateRandomNumber,
    };
}
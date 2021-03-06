import React from 'react'
import Card from './Card'

export default function Flashcards({ setScreen, flashcardTarget }) {

    const userFlashcards = [
        {
            question: 'O que é JSX?',
            answer: 'Uma extensão de linguagem do JavaScript'
        },
        {
            question: 'O React é __',
            answer: 'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            question: 'Componentes devem iniciar com __',
            answer: 'letra maiúscula'
        },
        {
            question: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões'
        },
        {
            question: 'O ReactDOM nos ajuda __',
            answer: 'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            question: 'Usamos o npm para __ ',
            answer: 'erenciar os'
        },
        {
            question: 'Usamos props para __',
            answer: 'Usamos props para __'
        },
        {
            question: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }
    ]
    const [fail, setFailure] = React.useState(0)
    const [zap, setZap] = React.useState(0)

    return (
        <Card setScreen={setScreen}
            userFlashcards={userFlashcards}
            fail={fail}
            setFailure={setFailure}
            flashcardTarget={flashcardTarget}
            zap={zap}
            setZap={setZap}
        />
    )
}
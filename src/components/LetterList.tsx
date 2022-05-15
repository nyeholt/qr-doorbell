

import * as React from 'react';

interface Props { }

interface State {
    activeLetters: string[]
}

export class LetterList extends React.Component<Props, State>  {

    constructor(props: Props) {
        super(props)

        this.state = {
            activeLetters: []
        }
    }

    onLetterClick = (letter: string) => {
        const letters = this.state.activeLetters;
        letters.push(letter);

        this.setState({
            activeLetters: Array.from(new Set(letters))
        });
    }

    render(): JSX.Element {
        const {
            activeLetters
        } = this.state;

        const letters = [...Array(26)].map((x, i) => String.fromCharCode(i + 97))
        
        return (
            <div>
                {letters.map((letter: string, index: number) => {
                    const buttonStyle = activeLetters.indexOf(letter) >= 0 ? {backgroundColor: "#ffc"} : {};
                    return <button key={index} style={buttonStyle} onClick={() => this.onLetterClick(letter)}>{letter}</button>
                })}
            </div>
        )
    }
}
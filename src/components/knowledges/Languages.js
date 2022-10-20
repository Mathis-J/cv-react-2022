import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
state = {
    languages: [
        {id: 1, value: "JavaScript", xp:2},
        {id: 2, value: "PHP", xp:1.2},
        {id: 3, value: "TypeScript", xp:1.2},
        {id: 4, value: "CSS", xp:2},
        {id: 5, value: "HTML5:", xp:2}
    ],
    frameworks: [
        {id: 1, value: "React", xp:1.5},
        {id: 2, value: "Sass", xp:1.5},
        {id: 3, value: "Symfony", xp:1}
    ]
}

    render() { 
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    title="Languages"
                    languages={languages}
                    className="languagesDisplay"
                />

                <ProgressBar
                    title="Frameworks & librairies"
                    languages={frameworks}
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;
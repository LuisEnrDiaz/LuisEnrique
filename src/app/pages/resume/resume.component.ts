import { Component } from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
})
export class ResumeComponent {
    front = [
        { name: 'Angular', img: '../../../assets/resume/angular.png' },
        { name: 'React', img: '../../../assets/resume/react.png' },
        { name: 'Css', img: '../../../assets/resume/css3.png' },
        { name: 'Html', img: '../../../assets/resume/html5.png' },
        { name: 'Javascript', img: '../../../assets/resume/javascript.png' },
        { name: 'Jest', img: '../../../assets/resume/jest.png' },
        { name: 'Redux', img: '../../../assets/resume/redux.png' },
        { name: 'Sass', img: '../../../assets/resume/sass.png' },
        { name: 'TailwindCss', img: '../../../assets/resume/tailwindcss.png' },
        { name: 'Typescript', img: '../../../assets/resume/typescript.png' },
    ];

    back = [
        { name: 'Express', img: '../../../assets/resume/express.png' },
        { name: 'MongoDB', img: '../../../assets/resume/mongodb.png' },
        { name: 'NodeJs', img: '../../../assets/resume/nodejs.png' },
        { name: 'Typescript', img: '../../../assets/resume/typescript.png' },
    ];

    others = [
        {
            name: 'AdobeIllustrator',
            img: '../../../assets/resume/adobeIlustrator.png',
        },
        { name: 'Eslint', img: '../../../assets/resume/eslint.png' },
        { name: 'Figma', img: '../../../assets/resume/figma.png' },
        { name: 'FireBase', img: '../../../assets/resume/firebase.png' },
        { name: 'Git', img: '../../../assets/resume/git.png' },
        { name: 'GitHub', img: '../../../assets/resume/github.png' },
        { name: 'Npm', img: '../../../assets/resume/npm.png' },
        { name: 'PostMan', img: '../../../assets/resume/postman.png' },
        { name: 'Prettier', img: '../../../assets/resume/prettier.png' },
        { name: 'SonarCloud', img: '../../../assets/resume/sonar.png' },
        { name: 'VisualStudio', img: '../../../assets/resume/vscode.png' },
    ];
}

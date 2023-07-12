export type ProjectsI = {
    id: string;
    img: string;
    title: string;
    img2?: string;
    img3?: string;
    img4?: string;
    framework: FrameworkI;
    code: string | null;
    web: string | null;
    description: string;
    technologies: Array<string>;
};

type FrameworkI = 'React' | 'Angular' | 'NodeJs';

export type ChildItem = {
    title: string;
    color: string;
    textColor: string;
    description: string;
    background_img: string;
    link: string;
};

export type Section = {
    section_name: string;
    description: string;
    child_item: ChildItem[];
};
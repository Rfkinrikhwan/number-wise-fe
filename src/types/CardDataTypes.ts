export type ChildItem = {
    title: string;
    description: string;
    link: string;
};

export type Section = {
    section_name: string;
    description: string;
    child_item: ChildItem[];
};
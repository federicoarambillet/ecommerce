import { Category } from "./category.model";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: Category;
    images: string[];
    creationAt: string;
}

import { Metrics } from './constants/metrics.enum';

export interface IIngredient {
    Id: string;
    name: string;
    label: string;
    description: string;
    image: string;
    // metric: Metrics;
}

import { Coords } from '../components/types';
declare const useRoute: ({ coords }: {
    coords: Coords[];
}) => {
    altitude: [] | undefined;
    geometry: {
        x: number;
        y: number;
    }[] | undefined;
    itinerary: [] | undefined;
};
export default useRoute;

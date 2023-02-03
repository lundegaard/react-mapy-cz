declare const useGetMyLocation: (onLocationFound: (coords: {
    longitude: number;
    latitude: number;
}) => void, onError?: (error: GeolocationPositionError) => null) => {
    geolocationEnabled: boolean;
    handleClick: () => void;
    loading: boolean;
};
export default useGetMyLocation;

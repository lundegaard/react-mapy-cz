import { FormEvent } from 'react';
declare const useGeolocation: (searchValue: string, disableGeolocation: boolean | undefined) => (event: FormEvent<HTMLFormElement>) => void;
export default useGeolocation;

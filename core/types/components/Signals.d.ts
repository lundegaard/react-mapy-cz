import { FC, MouseEventHandler } from 'react';
/**
 * Event listener for actions happening on the map.
 * Enables developer to define onClick handler to react to map click events
 *
 * Usage - Add as a child of Map component
 *
 * @returns null
 */
interface SignalsProps {
    onClusterClick?: MouseEventHandler<HTMLElement>;
    onMarkerClick?: MouseEventHandler<HTMLElement>;
}
declare const Signals: FC<SignalsProps>;
export default Signals;

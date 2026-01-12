import freeze from "../../../assets/Freeze card.svg"
import limit from '../../../assets/Set spend limit.svg';
import gpay from '../../../assets/GPay.svg';
import replace from '../../../assets/Replace card.svg';
import deactivate from '../../../assets/Deactivate card.svg';


import type { ActionIcon } from '../../../types/cards.types';

export const ACTION_ICONS: Record<ActionIcon, string> = {
    freeze,
    limit,
    gpay,
    replace,
    deactivate
};

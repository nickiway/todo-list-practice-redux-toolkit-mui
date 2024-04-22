// * generat
import { v4 as uuidv4 } from 'uuid';

// * types
import { UIdType } from '../types/general';

export const generateUId = (): UIdType => {
  return uuidv4();
};

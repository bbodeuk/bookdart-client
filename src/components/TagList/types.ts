import { ReactElement, Dispatch, SetStateAction } from 'react';

export interface TagListProps {
  list: string[];
  children?: ReactElement | ReactElement[];
  removable?: boolean;
  setTags?: Dispatch<SetStateAction<string[]>>;
}

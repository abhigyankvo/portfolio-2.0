export interface IProps {
  menu: boolean;
  toggleMenu: (val?: boolean) => void;
  topMenuRef: React.RefObject<HTMLDivElement>;
}

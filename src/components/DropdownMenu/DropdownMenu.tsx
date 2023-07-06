import type { MenuItemType } from "../Dropdown";
import { FeatherIcon } from "../FeatherIcon";
import * as S from "./styled";

type Props = {
  menuItems: MenuItemType[];
  handleClose: () => void;
};

export function DropdownMenu({ menuItems, handleClose }: Props) {
  return (
    <S.MenuContainer>
      {menuItems.map(({ icon, label, onClick }) => (
        <S.MenuItemContainer
          key={label}
          onClick={() => {
            onClick();
            handleClose();
          }}
        >
          <S.MenuItemLabel>{label}</S.MenuItemLabel>
          <FeatherIcon icon={icon} />
        </S.MenuItemContainer>
      ))}
    </S.MenuContainer>
  );
}

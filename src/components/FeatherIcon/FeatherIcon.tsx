import { FeatherIconNames, icons } from "feather-icons";
import * as S from "./styled";

type Props = {
  icon: FeatherIconNames;
};

const getInlineSrc = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export const FeatherIcon = ({ icon }: Props) => {
  return <S.Icon src={getInlineSrc(icons[icon].toSvg())} />;
};

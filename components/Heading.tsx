import * as React from "react";
import styled from "../styled";
import withMargin from "../styled/withMargin";

type HeadingColor = "gray" | "white";
type HeadingSize = "m" | "l" | "xl";
type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

interface StyledHeadingProps {
  as: HeadingAs;
  color: HeadingColor;
  align: "left" | "center";
  margin?: string;
}

export interface HeadingProps {
  children: React.ReactNode;
  as?: HeadingAs;
  color?: HeadingColor;
  align?: "left" | "center";
  margin?: string;
}

function getSize(tag: HeadingAs): HeadingSize {
  switch (tag) {
    case "h1":
      return "xl";
    case "h2":
      return "l";
    case "h3":
      return "m";
    default:
      return "m";
  }
}

const StyledHeading = styled("h1")<StyledHeadingProps>`
  width: 100%;
  font-size: ${p => p.theme.typography.size[getSize(p.as)]};
  line-height: ${p => p.theme.typography.lineHeight[getSize(p.as)]};
  color: ${p => p.theme.color[p.color]};
  text-align: ${p => p.align};
  padding: 0;
  ${withMargin}
`;

export const Heading: React.FC<HeadingProps> = ({
  as,
  align,
  color,
  margin,
  children
}) => {
  return (
    <StyledHeading as={as} align={align} color={color} margin={margin}>
      {children}
    </StyledHeading>
  );
};

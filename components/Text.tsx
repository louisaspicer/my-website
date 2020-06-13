import * as React from "react";
import styled from "../styled";
import withMargin from "../styled/withMargin";

type TextColor =
  | "gray90"
  | "gray70"
  | "gray30"
  | "red70"
  | "green70"
  | "blue70"
  | "orange70"
  | "white";

interface StyledTextProps {
  align: "left" | "center" | "right" | "justify";
  size: "xs" | "s" | "m";
  color: TextColor;
  isInline: boolean;
  isBold: boolean;
  margin?: string;
  as?: React.ReactType | keyof JSX.IntrinsicElements;
}

const StyledText = styled("p")<StyledTextProps>`
  display: ${p => (p.isInline ? "inline-block" : "block")};
  color: ${p => p.theme.color[p.color]};
  font-family: ${p => p.theme.typography.fontFamily};
  font-weight: ${p => (p.isBold ? 500 : 300)};
  font-size: ${p => p.theme.typography.size[p.size]};
  line-height: ${p => p.theme.typography.lineHeight[p.size]};
  text-align: ${p => p.align};

  ${withMargin};
`;

export interface TextProps {
  children: React.ReactNode;
  as?: React.ReactType | keyof JSX.IntrinsicElements;
  className?: string;
  align?: "left" | "center" | "right" | "justify";
  size?: "xs" | "s" | "m";
  color?: TextColor;
  isInline?: boolean;
  isBold?: boolean;
  onClick?: () => void;
  margin?: string;
}

export const Text = ({
  children,
  className,
  as,
  align = "left",
  size = "m",
  color = "gray90",
  isInline = false,
  isBold = false,
  margin
}: TextProps) => {
  const tag = as ? as : isInline ? "span" : "p";
  return (
    <StyledText
      className={className}
      as={tag}
      align={align}
      size={size}
      color={color}
      isInline={isInline}
      isBold={isBold}
      margin={margin}
    >
      {children}
    </StyledText>
  );
};

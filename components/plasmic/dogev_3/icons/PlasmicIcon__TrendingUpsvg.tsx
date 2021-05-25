// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrendingUpsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrendingUpsvgIcon(props: TrendingUpsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"2"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "feather feather-trending-up"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M23 6l-9.5 9.5-5-5L1 18"}></path>

      <path d={"M17 6h6v6"}></path>
    </svg>
  );
}

export default TrendingUpsvgIcon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DonutChartLinesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DonutChartLinesvgIcon(props: DonutChartLinesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={
          "M11 2.05v2.012a8.001 8.001 0 105.906 14.258l1.423 1.423A9.966 9.966 0 0112 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13a9.948 9.948 0 01-2.207 5.328l-1.423-1.422A7.962 7.962 0 0019.938 13h2.013zM13.002 2.05a10.004 10.004 0 018.95 8.95h-2.013a8.005 8.005 0 00-6.937-6.938V2.049z"
        }
      ></path>
    </svg>
  );
}

export default DonutChartLinesvgIcon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uhjxjVT6QbAZLostZzQbnY
// Component: q_Z45ut691D
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Section from "../../Section"; // plasmic-import: Nv2df4VJh9nrf/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: cEbw2qKx5Gc4Ev/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_dogev_3.module.css"; // plasmic-import: uhjxjVT6QbAZLostZzQbnY/projectcss
import * as sty from "./PlasmicTopSection6.module.css"; // plasmic-import: q_Z45ut691D/css

import MetamasksvgIcon from "./icons/PlasmicIcon__Metamasksvg"; // plasmic-import: dkMQ3rMvk/icon
import UniswapUniLogosvgIcon from "./icons/PlasmicIcon__UniswapUniLogosvg"; // plasmic-import: 6dp29rw48Y/icon
import RocketsvgIcon from "./icons/PlasmicIcon__Rocketsvg"; // plasmic-import: XWs4dbNTof/icon
import BLUE from "../../Text/BLUE";
import RED from "../../Text/RED";
import ORANGE from "../../Text/ORANGE";

export type PlasmicTopSection6__VariantMembers = {};

export type PlasmicTopSection6__VariantsArgs = {};
type VariantPropType = keyof PlasmicTopSection6__VariantsArgs;
export const PlasmicTopSection6__VariantProps = new Array<VariantPropType>();

export type PlasmicTopSection6__ArgsType = {};
type ArgPropType = keyof PlasmicTopSection6__ArgsType;
export const PlasmicTopSection6__ArgProps = new Array<ArgPropType>();

export type PlasmicTopSection6__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<typeof Section>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultTopSection6Props {
  className?: string;
}

function PlasmicTopSection6__RenderFunc(props: {
  variants: PlasmicTopSection6__VariantsArgs;
  args: PlasmicTopSection6__ArgsType;
  overrides: PlasmicTopSection6__OverridesType;
  dataFetches?: PlasmicTopSection6__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      id={"buy" as const}
    >
      <p.Stack
        as={"div"}
        hasGap={hasVariant(globalVariants, "screen", "mobile") ? true : false}
        className={classNames(defaultcss.all, sty.box__kiWh0)}
      >
        <Section
          data-plasmic-name={"section"}
          data-plasmic-override={overrides.section}
          className={classNames("__wab_instance", sty.section)}
          subtitle={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__jRym3
              )}
            >
              {" "}
            </div>
          }
          title={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__wxE2S
              )}
            >
              {"How to Buy Doge V3"}
            </div>
          }
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box___2LnZ7)}
        >
          <div className={classNames(defaultcss.all, sty.box__d7UiL)}>
            <div className={classNames(defaultcss.all, sty.box__gb23Z)}>
              <MetamasksvgIcon
                className={classNames(defaultcss.all, sty.svg__buEqa)}
                role={"img"}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__x4Zy3
                )}
              >
                <span>
                  <span style={{ fontWeight: 700 }}>
                    {"1. Install Metamask"}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className={classNames(defaultcss.all, sty.box__rqdGx)}>
            <div className={classNames(defaultcss.all, sty.box__v4K0G)}>
              <UniswapUniLogosvgIcon
                className={classNames(defaultcss.all, sty.svg__nDm0S)}
                role={"img"}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__sD65
                )}
              >
                <span>
                  <span style={{ fontWeight: 700 }}>{"2. Go to Uniswap"}</span>
                </span>
              </div>
            </div>
          </div>

          <div className={classNames(defaultcss.all, sty.box__ofmSv)}>
            <div className={classNames(defaultcss.all, sty.box__hNjqo)}>
              <RocketsvgIcon
                className={classNames(defaultcss.all, sty.svg__nd0Qc)}
                role={"img"}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__v2Sk
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile") ? (
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      {"3. Turn on Expert Mode"}
                    </span>
                  </span>
                ) : (
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      {"3. Turn on Expert Mode"}
                    </span>
                  </span>
                )}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___22Lno
                )}
              >
                Click on the gear icon to open<br /><BLUE>Transaction Settings</BLUE><br />&gt; Click On next to <RED>Toggle Expert Mode</RED> &gt; <ORANGE>Confirm warning</ORANGE> &gt; done!<br /><br />
              </div>
            </div>
          </div>
        </p.Stack>

        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.link
          )}
          component={Link}
          href={
            "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x555c7fa88591181E75B6C246e0Fe76974f6B859f&exactField=input" as const
          }
          platform={"nextjs"}
        >
          {"Go to Uniswap"}
        </p.PlasmicLink>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "link"],
  section: ["section"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: typeof Section;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTopSection6__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTopSection6__VariantsArgs;
    args?: PlasmicTopSection6__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTopSection6__Fetches;
  } & Omit<PlasmicTopSection6__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTopSection6__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTopSection6__ArgProps,
      internalVariantPropNames: PlasmicTopSection6__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTopSection6__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTopSection6";
  } else {
    func.displayName = `PlasmicTopSection6.${nodeName}`;
  }
  return func;
}

export const PlasmicTopSection6 = Object.assign(
  // Top-level PlasmicTopSection6 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicTopSection6
    internalVariantProps: PlasmicTopSection6__VariantProps,
    internalArgProps: PlasmicTopSection6__ArgProps
  }
);

export default PlasmicTopSection6;
/* prettier-ignore-end */

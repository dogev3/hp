// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uhjxjVT6QbAZLostZzQbnY
// Component: pa50bfxK1QN
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
import * as sty from "./PlasmicTopSection4.module.css"; // plasmic-import: pa50bfxK1QN/css
import HDOGE from "../../Text/HDOGE";
import RED from "../../Text/RED";
import HUni from "../../Text/HUni";

export type PlasmicTopSection4__VariantMembers = {};

export type PlasmicTopSection4__VariantsArgs = {};
type VariantPropType = keyof PlasmicTopSection4__VariantsArgs;
export const PlasmicTopSection4__VariantProps = new Array<VariantPropType>();

export type PlasmicTopSection4__ArgsType = {};
type ArgPropType = keyof PlasmicTopSection4__ArgsType;
export const PlasmicTopSection4__ArgProps = new Array<ArgPropType>();

export type PlasmicTopSection4__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<typeof Section>;
};

export interface DefaultTopSection4Props {
  className?: string;
}

function PlasmicTopSection4__RenderFunc(props: {
  variants: PlasmicTopSection4__VariantsArgs;
  args: PlasmicTopSection4__ArgsType;
  overrides: PlasmicTopSection4__OverridesType;
  dataFetches?: PlasmicTopSection4__Fetches;
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
    >
      <p.Stack
        as={"div"}
        hasGap={hasVariant(globalVariants, "screen", "mobile") ? true : false}
        className={classNames(defaultcss.all, sty.box__jhgk0)}
      >
        <div className={classNames(defaultcss.all, sty.box__hPsMl)} />

        <Section
          data-plasmic-name={"section"}
          data-plasmic-override={overrides.section}
          className={classNames("__wab_instance", sty.section)}
          subtitle={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__mHuVm
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
                sty.box__dbSqo
              )}
            >
              {"Pawpamentally Superior"}
            </div>
          }
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__mMbm)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__fcqAv
            )}
          >
            <HDOGE>Doge V3</HDOGE> is designed to <RED>PUMP</RED> fast, specifically on <HUni>Uniswap V3</HUni><br />All made possible by the Moon Rocket Nitro Accelerator. <br /><br /><HDOGE>DOGEV3</HDOGE> is cheap!<br />Users can load up on a ton of <HDOGE>DOGEV3</HDOGE>.<br />Hurry hurry before the rocket launches for the moon!<br /><br />We locked <strong>50%</strong> of the total supply (130,000,000,000 DOGEV3) to <br /><HUni>UniswapV3</HUni> and threw away the keys, paying homage to the other dog coins, woof woof! <br /><br /> The remaining <storng>50%</storng> will not be sent to YOU KNOW WHOs so no rug pulling!<br />No bad doggies in this dogg pound.<br /> <br /><HDOGE>DOGEV3</HDOGE> is also in compliance with GAFL (Generally Accepted Fair Launch) principles:
          </div>

          <div className={classNames(defaultcss.all, sty.box__tuOtz)}>
            <p.Stack
              as={"div"}
              hasGap={
                hasVariant(globalVariants, "screen", "mobile") ? true : false
              }
              className={classNames(defaultcss.all, sty.box__kZzAh)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__na2Hm
                )}
              >
                {"- "}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___6Qhec
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "No premine"
                  : "No premine"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={
                hasVariant(globalVariants, "screen", "mobile") ? true : false
              }
              className={classNames(defaultcss.all, sty.box__jc6WG)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__hplmk
                )}
              >
                {"- "}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__iRbyv
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "No dev/team tokens (i.e. no poo pooing by the team)"
                  : "No dev/team tokens (i.e. no poo pooing by the team)"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={
                hasVariant(globalVariants, "screen", "mobile") ? true : false
              }
              className={classNames(defaultcss.all, sty.box__mBhrZ)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___8XUb
                )}
              >
                {"- "}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__pI71A
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "No presale"
                  : "No presale"}
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={
                hasVariant(globalVariants, "screen", "mobile") ? true : false
              }
              className={classNames(defaultcss.all, sty.box__unyU)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___099Qh
                )}
              >
                {"- "}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__v6N8S
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "No ICO/IDO/IPO/IEO/ISO/IFO"
                  : "No ICO/IDO/IPO/IEO/ISO/IFO"}
              </div>
            </p.Stack>
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__uQPxw
            )}
          >
            The only way anyone, including the team members,<br />can acquire <HDOGE>DOGEV3</HDOGE> is through the open and free market.
            {hasVariant(globalVariants, "screen", "mobile") ? '\n\n' : ''}
          </div>
        </p.Stack>
      </p.Stack>
    </div>)
  }

const PlasmicDescendants = {
  root: ["root", "section"],
  section: ["section"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: typeof Section;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTopSection4__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTopSection4__VariantsArgs;
    args?: PlasmicTopSection4__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTopSection4__Fetches;
  } & Omit<PlasmicTopSection4__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTopSection4__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTopSection4__ArgProps,
      internalVariantPropNames: PlasmicTopSection4__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTopSection4__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTopSection4";
  } else {
    func.displayName = `PlasmicTopSection4.${nodeName}`;
  }
  return func;
}

export const PlasmicTopSection4 = Object.assign(
  // Top-level PlasmicTopSection4 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),

    // Metadata about props expected for PlasmicTopSection4
    internalVariantProps: PlasmicTopSection4__VariantProps,
    internalArgProps: PlasmicTopSection4__ArgProps
  }
);

export default PlasmicTopSection4;
/* prettier-ignore-end */
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uhjxjVT6QbAZLostZzQbnY
// Component: 625oINhfxRLzG
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
import LinkButton from "../../LinkButton"; // plasmic-import: MbX3pXP-Npo9k/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: cEbw2qKx5Gc4Ev/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_dogev_3.module.css"; // plasmic-import: uhjxjVT6QbAZLostZzQbnY/projectcss
import * as sty from "./PlasmicTopSection.module.css"; // plasmic-import: 625oINhfxRLzG/css
import HUni from "../../Text/HUni";
import HDOGE from "../../Text/HDOGE";
import RED from "../../Text/RED";

export type PlasmicTopSection__VariantMembers = {};

export type PlasmicTopSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicTopSection__VariantsArgs;
export const PlasmicTopSection__VariantProps = new Array<VariantPropType>();

export type PlasmicTopSection__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTopSection__ArgsType;
export const PlasmicTopSection__ArgProps = new Array<ArgPropType>("children");

export type PlasmicTopSection__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTopSectionProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicTopSection__RenderFunc(props: {
  variants: PlasmicTopSection__VariantsArgs;
  args: PlasmicTopSection__ArgsType;
  overrides: PlasmicTopSection__OverridesType;
  dataFetches?: PlasmicTopSection__Fetches;
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
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__quuE8)}
      >
        <div className={classNames(defaultcss.all, sty.box__ll7Xz)}>
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__cAyO5
            )}
          >
            <HDOGE>Doge</HDOGE> + <HUni>UniswapV3</HUni> =
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___1Ibab
            )}
          >
            {"$DOGEV3"}
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.box__gueI)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__e2HF)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___1Gi0K
              )}
            >
              <HDOGE>Doggy Coin</HDOGE> with <HUni>Pawpamentals</HUni><br /><RED>Moon Rocket Nitro Accelerator (MRNA)</RED> Enabled<br/>This Dog is Designed to PUMP faster than any other coin on <HUni>Uniswap V3</HUni>
            </div>

            <div className={classNames(defaultcss.all, sty.box__nRbpY)}>
              {p.renderPlasmicSlot({
                defaultContents:
                  "DOGEV3: $0.00003\nCurrent Stage: 4\nNeed to 3x from current price to rev up to Stage 3",
                value: args.children,
                className: classNames(sty.slotChildren)
              })}
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__fL0GP)}
            >
              <LinkButton
                className={classNames("__wab_instance", sty.linkButton___5SyRr)}
                href={"#buy" as const}
                text={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__iw9Uu
                    )}
                  >
                    {"Buy Now"}
                  </div>
                }
                type={"solidBlue" as const}
              />

              <LinkButton
                className={classNames("__wab_instance", sty.linkButton__vmvCx)}
                href={"/whitepaper" as const}
                text={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__wrw7G
                    )}
                  >
                    {"Read Our Whitepaper"}
                  </div>
                }
                type={"solidBlack" as const}
              />
            </p.Stack>
          </p.Stack>

          {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__afKgX)}
              loading={"lazy" as const}
              role={"img"}
              src={"/plasmic/dogev_3/images/dogeCirclepng.png"}
            />
          ) : null}
        </div>

        {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
          <div className={classNames(defaultcss.all, sty.box__uevNz)}>
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img___77YxI)}
              role={"img"}
              src={"/plasmic/dogev_3/images/dogev3Boxpng.png"}
            />
          </div>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTopSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTopSection__VariantsArgs;
    args?: PlasmicTopSection__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTopSection__Fetches;
  } & Omit<PlasmicTopSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTopSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTopSection__ArgProps,
      internalVariantPropNames: PlasmicTopSection__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTopSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTopSection";
  } else {
    func.displayName = `PlasmicTopSection.${nodeName}`;
  }
  return func;
}

export const PlasmicTopSection = Object.assign(
  // Top-level PlasmicTopSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTopSection
    internalVariantProps: PlasmicTopSection__VariantProps,
    internalArgProps: PlasmicTopSection__ArgProps
  }
);

export default PlasmicTopSection;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uhjxjVT6QbAZLostZzQbnY
// Component: zfH50axSPvl
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
import * as sty from "./PlasmicTopSection2.module.css"; // plasmic-import: zfH50axSPvl/css
import RED from "../../Text/RED";
import HUni from "../../Text/HUni";

export type PlasmicTopSection2__VariantMembers = {};

export type PlasmicTopSection2__VariantsArgs = {};
type VariantPropType = keyof PlasmicTopSection2__VariantsArgs;
export const PlasmicTopSection2__VariantProps = new Array<VariantPropType>();

export type PlasmicTopSection2__ArgsType = {};
type ArgPropType = keyof PlasmicTopSection2__ArgsType;
export const PlasmicTopSection2__ArgProps = new Array<ArgPropType>();

export type PlasmicTopSection2__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<typeof Section>;
};

export interface DefaultTopSection2Props {
  className?: string;
}

function PlasmicTopSection2__RenderFunc(props: {
  variants: PlasmicTopSection2__VariantsArgs;
  args: PlasmicTopSection2__ArgsType;
  overrides: PlasmicTopSection2__OverridesType;
  dataFetches?: PlasmicTopSection2__Fetches;
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
        className={classNames(defaultcss.all, sty.box__yUxle)}
        id={"mrna" as const}
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
                sty.box__qsvj3
              )}
            >
              The <RED>Moon Rocket Nitro Accelerator (MRNA)</RED> is a smart contract that makes the price of <HUni>DOGEV3</HUni> easy to pump but hard to dump!
            </div>
          }
          title={"Moon Rocket Nitro Accelerator"}
        />

        <div className={classNames(defaultcss.all, sty.box__isi9R)}>
          {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img___3NpnP)}
              loading={"lazy" as const}
              role={"img"}
              src={"/plasmic/dogev_3/images/dogeRaceCirclepng.png"}
            />
          ) : null}

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__s9)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__hCnVl
              )}
            >
              <RED>MRNA</RED> automatically performs the following functions without the need for human intervention:
            </div>

            <div className={classNames(defaultcss.all, sty.box__iFbbG)}>
              <div className={classNames(defaultcss.all, sty.box__ropH)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__jTkwX
                  )}
                >
                  {"- "}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___8DzTt
                  )}
                >
                  Dynamically adjusts the price range to supply liquidity based on <HUni>DOGEV3</HUni> price movements
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box__kx3Qt)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__fEckW
                  )}
                >
                  {"- "}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___4LKIa
                  )}
                >
                  {
                    "Adjust the amount of liquidity provided based on the given price range"
                  }
                </div>
              </div>
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__r9P0I
              )}
            >
              Ain't nothin' gonna break my stride<br />Doggy pumping and it won't touch ground<br /><strong>Oh no, doggy got to keep on movin'!!</strong>
            </div>
          </p.Stack>
        </div>

        {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
          <div className={classNames(defaultcss.all, sty.box___626Z5)}>
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__qtuEt)}
              role={"img"}
              src={
                hasVariant(globalVariants, "screen", "mobile")
                  ? "/plasmic/dogev_3/images/dogeRaceCirclepng.png"
                  : "/plasmic/dogev_3/images/dogev3Boxpng.png"
              }
            />
          </div>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
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
  PlasmicTopSection2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTopSection2__VariantsArgs;
    args?: PlasmicTopSection2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTopSection2__Fetches;
  } & Omit<PlasmicTopSection2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTopSection2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTopSection2__ArgProps,
      internalVariantPropNames: PlasmicTopSection2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTopSection2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTopSection2";
  } else {
    func.displayName = `PlasmicTopSection2.${nodeName}`;
  }
  return func;
}

export const PlasmicTopSection2 = Object.assign(
  // Top-level PlasmicTopSection2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),

    // Metadata about props expected for PlasmicTopSection2
    internalVariantProps: PlasmicTopSection2__VariantProps,
    internalArgProps: PlasmicTopSection2__ArgProps
  }
);

export default PlasmicTopSection2;
/* prettier-ignore-end */
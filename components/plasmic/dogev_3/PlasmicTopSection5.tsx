// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uhjxjVT6QbAZLostZzQbnY
// Component: fMVhuyPqRaE
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
import * as sty from "./PlasmicTopSection5.module.css"; // plasmic-import: fMVhuyPqRaE/css

export type PlasmicTopSection5__VariantMembers = {};

export type PlasmicTopSection5__VariantsArgs = {};
type VariantPropType = keyof PlasmicTopSection5__VariantsArgs;
export const PlasmicTopSection5__VariantProps = new Array<VariantPropType>();

export type PlasmicTopSection5__ArgsType = {};
type ArgPropType = keyof PlasmicTopSection5__ArgsType;
export const PlasmicTopSection5__ArgProps = new Array<ArgPropType>();

export type PlasmicTopSection5__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<typeof Section>;
};

export interface DefaultTopSection5Props {
  className?: string;
}

function PlasmicTopSection5__RenderFunc(props: {
  variants: PlasmicTopSection5__VariantsArgs;
  args: PlasmicTopSection5__ArgsType;
  overrides: PlasmicTopSection5__OverridesType;
  dataFetches?: PlasmicTopSection5__Fetches;
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
      id={"community" as const}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__woBoH)}
      >
        <div className={classNames(defaultcss.all, sty.box__pyxnP)}>
          {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
            <div className={classNames(defaultcss.all, sty.box__z36SL)}>
              {(
                hasVariant(globalVariants, "screen", "mobile") ? false : true
              ) ? (
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__aprHg)}
                  loading={"lazy" as const}
                  role={"img"}
                  src={"/plasmic/dogev_3/images/tridogeIconpng.png"}
                />
              ) : null}
            </div>
          ) : null}

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__yJLdp)}
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
                    sty.box__s9Zb3
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
                    sty.box__glYx5
                  )}
                >
                  {"Community"}
                </div>
              }
            />

            {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
              <div className={classNames(defaultcss.all, sty.box__qfxPo)}>
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img___4HU0)}
                  role={"img"}
                  src={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? "/plasmic/dogev_3/images/tridogeIconpng.png"
                      : "/plasmic/dogev_3/images/dogev3Boxpng.png"
                  }
                />
              </div>
            ) : null}

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__wzfzc
              )}
            >
              <span>
                <React.Fragment>
                  {
                    "Doge V3 is a Lone Wolf that lives independently,\nstrong and proud. \nThere is no community manager and no paid shills. \n\nAll dogs have to learn to make it on their own. ​\n\nIf you really need help, howl (tweet) on a full moon night (any day actually) with hashtag #dogev3 and a dire wolf nearby just might come and save the day.\n\nYou can catch your dawg on Twitter and Telegram. \n\nNever send tokens to impersonators\nand dogs that claim to be from the project. \n\nDoge V3 will never ask or funds or ask for your private keys. \n\nKeep those keys hidden, lock away your DOGEV3 tokens, and let's rocket to the moon and beyond! \n\n"
                  }
                </React.Fragment>
                <span style={{ fontWeight: 700 }}>
                  {"Bow wow wow yippi yo yippi yay!!"}
                </span>
              </span>
            </div>

            <div className={classNames(defaultcss.all, sty.box__zpZdE)}>
              <p.PlasmicLink
                className={classNames(defaultcss.all, sty.link__wstza)}
                component={Link}
                href={"https://twitter.com/_dogev3_" as const}
                platform={"nextjs"}
              >
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__jvHx2)}
                  role={"img"}
                  src={"/plasmic/dogev_3/images/twitterpng.png"}
                />
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(defaultcss.all, sty.link__vXirc)}
                component={Link}
                href={"https://t.me/doge_v3" as const}
                platform={"nextjs"}
              >
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__uyz6C)}
                  role={"img"}
                  src={"/plasmic/dogev_3/images/telegrampng.png"}
                />
              </p.PlasmicLink>
            </div>
          </p.Stack>
        </div>
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
  PlasmicTopSection5__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTopSection5__VariantsArgs;
    args?: PlasmicTopSection5__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTopSection5__Fetches;
  } & Omit<PlasmicTopSection5__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTopSection5__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTopSection5__ArgProps,
      internalVariantPropNames: PlasmicTopSection5__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTopSection5__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTopSection5";
  } else {
    func.displayName = `PlasmicTopSection5.${nodeName}`;
  }
  return func;
}

export const PlasmicTopSection5 = Object.assign(
  // Top-level PlasmicTopSection5 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),

    // Metadata about props expected for PlasmicTopSection5
    internalVariantProps: PlasmicTopSection5__VariantProps,
    internalArgProps: PlasmicTopSection5__ArgProps
  }
);

export default PlasmicTopSection5;
/* prettier-ignore-end */

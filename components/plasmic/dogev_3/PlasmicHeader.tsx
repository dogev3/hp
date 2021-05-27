// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uhjxjVT6QbAZLostZzQbnY
// Component: LiSRy1gX3K1f_
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
import MenuButton from "../../MenuButton"; // plasmic-import: jhnS_v6HGz/component
import LinkButton from "../../LinkButton"; // plasmic-import: MbX3pXP-Npo9k/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: cEbw2qKx5Gc4Ev/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_dogev_3.module.css"; // plasmic-import: uhjxjVT6QbAZLostZzQbnY/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: LiSRy1gX3K1f_/css

import TridogesvgIcon from "./icons/PlasmicIcon__Tridogesvg"; // plasmic-import: d-lLXWoiL/icon

export type PlasmicHeader__VariantMembers = {
  toggled: "toggled";
};

export type PlasmicHeader__VariantsArgs = {
  setToggled?: (toggled: boolean) => void;
  toggled?: SingleBooleanChoiceArg<"toggled">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "toggled"
);

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultHeaderProps {
  setToggled?: (toggled: boolean) => void;
  toggled?: SingleBooleanChoiceArg<"toggled">;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  dataFetches?: PlasmicHeader__Fetches;
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
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__toggled]: hasVariant(variants, "toggled", "toggled")
      })}
    >
      {(
        hasVariant(variants, "toggled", "toggled") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : false
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__zaCup, {
            [sty.box__toggled__zaCupKgXzj]: hasVariant(
              variants,
              "toggled",
              "toggled"
            )
          })}
        >
          {(
            hasVariant(variants, "toggled", "toggled") &&
            hasVariant(globalVariants, "screen", "mobile")
              ? true
              : false
          ) ? (
            <div
              className={classNames(defaultcss.all, sty.box___3PSf, {
                [sty.box__toggled___3PSfKgXzj]: hasVariant(
                  variants,
                  "toggled",
                  "toggled"
                )
              })}
            >
              {(
                hasVariant(variants, "toggled", "toggled") &&
                hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : false
              ) ? (
                <div
                  className={classNames(defaultcss.all, sty.box__y6UWf, {
                    [sty.box__toggled__y6UWfKgXzj]: hasVariant(
                      variants,
                      "toggled",
                      "toggled"
                    )
                  })}
                >
                  <TridogesvgIcon
                    className={classNames(defaultcss.all, sty.svg__iQIc)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__zOUz
                    )}
                  >
                    {"DOGEV3"}
                  </div>
                </div>
              ) : null}
              {(
                hasVariant(variants, "toggled", "toggled") &&
                hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : false
              ) ? (
                <div
                  className={classNames(defaultcss.all, sty.box__ysLry, {
                    [sty.box__toggled__ysLryKgXzj]: hasVariant(
                      variants,
                      "toggled",
                      "toggled"
                    )
                  })}
                >
                  {(
                    hasVariant(globalVariants, "screen", "mobile")
                      ? true
                      : false
                  ) ? (
                    <MenuButton
                      toggled={variants.toggled}
                      setToggled={variants.setToggled}
                      className={classNames(
                        "__wab_instance",
                        sty.menuButton__qPSbr,
                        {
                          [sty.menuButton__toggled__qPSbrKgXzj]: hasVariant(
                            variants,
                            "toggled",
                            "toggled"
                          )
                        }
                      )}
                    />
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
          {(
            hasVariant(variants, "toggled", "toggled") &&
            hasVariant(globalVariants, "screen", "mobile")
              ? true
              : false
          ) ? (
            <div
              className={classNames(defaultcss.all, sty.box__mkXu, {
                [sty.box__toggled__mkXuKgXzj]: hasVariant(
                  variants,
                  "toggled",
                  "toggled"
                )
              })}
            >
              {(
                hasVariant(variants, "toggled", "toggled") &&
                hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : hasVariant(globalVariants, "screen", "mobile")
                  ? false
                  : false
              ) ? (
                <LinkButton
                  className={classNames(
                    "__wab_instance",
                    sty.linkButton__thsSg,
                    {
                      [sty.linkButton__toggled__thsSgKgXzj]: hasVariant(
                        variants,
                        "toggled",
                        "toggled"
                      )
                    }
                  )}
                  href={"/whitepaper" as const}
                  text={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__y1WkS
                      )}
                    >
                      {"Whitepaper"}
                    </div>
                  }
                  type={"small" as const}
                />
              ) : null}
              {(
                hasVariant(variants, "toggled", "toggled") &&
                hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : hasVariant(globalVariants, "screen", "mobile")
                  ? false
                  : false
              ) ? (
                <LinkButton
                  className={classNames(
                    "__wab_instance",
                    sty.linkButton__gJay,
                    {
                      [sty.linkButton__toggled__gJayKgXzj]: hasVariant(
                        variants,
                        "toggled",
                        "toggled"
                      )
                    }
                  )}
                  href={"#mrna" as const}
                  text={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__vlZ4W
                      )}
                    >
                      {"MRNA"}
                    </div>
                  }
                  type={"small" as const}
                />
              ) : null}
              {(
                hasVariant(variants, "toggled", "toggled") &&
                hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : hasVariant(globalVariants, "screen", "mobile")
                  ? false
                  : false
              ) ? (
                <LinkButton
                  className={classNames(
                    "__wab_instance",
                    sty.linkButton__lGlw,
                    {
                      [sty.linkButton__toggled__lGlwKgXzj]: hasVariant(
                        variants,
                        "toggled",
                        "toggled"
                      )
                    }
                  )}
                  href={"#community" as const}
                  text={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__mvhdd
                      )}
                    >
                      {"Community"}
                    </div>
                  }
                  type={"small" as const}
                />
              ) : null}
              {(
                hasVariant(variants, "toggled", "toggled") &&
                hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : hasVariant(globalVariants, "screen", "mobile")
                  ? false
                  : false
              ) ? (
                <LinkButton
                  className={classNames(
                    "__wab_instance",
                    sty.linkButton__spCJh,
                    {
                      [sty.linkButton__toggled__spCJhKgXzj]: hasVariant(
                        variants,
                        "toggled",
                        "toggled"
                      )
                    }
                  )}
                  href={"#buy" as const}
                  text={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__d2EQu
                      )}
                    >
                      {"Buy"}
                    </div>
                  }
                  type={"small" as const}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
      {(
        hasVariant(variants, "toggled", "toggled") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? false
          : true
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__yRJks, {
            [sty.box__toggled__yRJksKgXzj]: hasVariant(
              variants,
              "toggled",
              "toggled"
            )
          })}
        >
          <TridogesvgIcon
            className={classNames(defaultcss.all, sty.svg__kLsnB)}
            role={"img"}
          />

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__gqxL
            )}
          >
            {"DOGEV3"}
          </div>
        </div>
      ) : null}
      {(
        hasVariant(variants, "toggled", "toggled") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? false
          : hasVariant(globalVariants, "screen", "mobile")
          ? true
          : false
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__p80Nm, {
            [sty.box__toggled__p80NmKgXzj]: hasVariant(
              variants,
              "toggled",
              "toggled"
            )
          })}
        >
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <MenuButton
              toggled={variants.toggled}
              setToggled={variants.setToggled}
              className={classNames("__wab_instance", sty.menuButton__p4Gjd, {
                [sty.menuButton__toggled__p4GjdKgXzj]: hasVariant(
                  variants,
                  "toggled",
                  "toggled"
                )
              })}
            />
          ) : null}
        </div>
      ) : null}
      {(
        hasVariant(variants, "toggled", "toggled") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? false
          : hasVariant(globalVariants, "screen", "mobile")
          ? false
          : true
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.box__uf31C, {
            [sty.box__toggled__uf31CKgXzj]: hasVariant(
              variants,
              "toggled",
              "toggled"
            )
          })}
        >
          {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton___3GUcJ, {
                [sty.linkButton__toggled___3GUcJKgXzj]: hasVariant(
                  variants,
                  "toggled",
                  "toggled"
                )
              })}
              href={"/whitepaper" as const}
              text={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__eSa32
                  )}
                >
                  {"Whitepaper"}
                </div>
              }
              type={"small" as const}
            />
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__bhlE3, {
                [sty.linkButton__toggled__bhlE3KgXzj]: hasVariant(
                  variants,
                  "toggled",
                  "toggled"
                )
              })}
              href={"#mrna" as const}
              text={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__fsYie
                  )}
                >
                  {"MRNA"}
                </div>
              }
              type={"small" as const}
            />
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__giXtZ, {
                [sty.linkButton__toggled__giXtZKgXzj]: hasVariant(
                  variants,
                  "toggled",
                  "toggled"
                )
              })}
              href={"#community" as const}
              text={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__gtDmK
                  )}
                >
                  {"Community"}
                </div>
              }
              type={"small" as const}
            />
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__fVuce, {
                [sty.linkButton__toggled__fVuceKgXzj]: hasVariant(
                  variants,
                  "toggled",
                  "toggled"
                )
              })}
              href={"#buy" as const}
              text={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__saZwD
                  )}
                >
                  {"Buy"}
                </div>
              }
              type={"small" as const}
            />
          ) : null}
        </div>
      ) : null}
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
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeader__Fetches;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */

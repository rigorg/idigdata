import estate from "@/public/data/estate-nodes.json";

export type EstateNode = {
  id: string;
  label: string;
  gloss: string;
};

export type EstateCategory = {
  id: string;
  label: string;
  blurb: string;
  nodes: EstateNode[];
};

export type EstateNodesDoc = {
  version: number;
  updated: string;
  sot: string;
  captionKicker: string;
  caption: string;
  locks: string[];
  categories: EstateCategory[];
};

export const estateNodesDoc = estate as EstateNodesDoc;

export function estateLabelPool(doc: EstateNodesDoc = estateNodesDoc): string[] {
  return doc.categories.flatMap((c) => c.nodes.map((n) => n.label));
}

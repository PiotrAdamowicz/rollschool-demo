export type LinksType = {
  navigation: Link[];
  other: Link[];
};

export interface Link extends BaseLinkType {
  subNav?: BaseLinkType[];
}
export type BaseLinkType = {
  href: string;
  label: string;
  externalLink?: string;
};

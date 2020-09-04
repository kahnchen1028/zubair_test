export interface Rules {
  inclusion: Map<number, Rule>;
  exclusion: Map<number, Rule>;
}

export interface Rule {
  id: string;
  page: PageCategory;
  contain?: ContainCategory;
  partialUrl?: string;
}

export enum RuleCategory {
  INCLUSION = 'inclusion',
  EXCLUSION = 'exclusion'
}

export enum PageCategory {
  ALL_PAGES = 'All Pages',
  HOME_PAGE = 'Home Page',
  PRODUCT_PAGES = 'Product Pages',
  CUSTOM = 'Custom'
}

export enum ContainCategory {
  CONTAINS = 'Contains',
  EXACT_MATCH = 'Exact Match'
}

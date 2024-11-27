export interface AppTitleTab {
  // title of the tab
  title: string;
  // path of the tab
  path: string;
}

export interface AppTitleProps {
  // tabs in the title
  tabs: AppTitleTab[];
}

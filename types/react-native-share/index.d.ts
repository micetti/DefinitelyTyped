// Type definitions for react-native-share 2.0
// Project: https://github.com/react-native-community/react-native-share#readme
// Definitions by: Mark Nelissen <https://github.com/marknelissen>
//                 pera <https://github.com/santiagofm>
//                 MateusAndrade <https://github.com/MateusAndrade>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5.2

export interface ReactNativeShare {
  open: (options: Options | MultipleOptions) => Promise<OpenReturn>;
  shareSingle: (
    options: Options & { social: SupportedSocialApps }
  ) => Promise<ShareSingleReturn>;
  Social: {
    FACEBOOK: 'facebook';
    PAGESMANAGER: 'pagesmanager';
    TWITTER: 'twitter';
    WHATSAPP: 'whatsapp';
    INSTAGRAM: 'instagram';
    GOOGLEPLUS: 'googleplus';
    PINTEREST: 'pinterest';
    EMAIL: 'email';
    LINKEDIN: 'linkedin';
  };
}

declare const Share: ReactNativeShare;

export default Share;

export interface OpenReturn {
  app?: string;
  dismissedAction?: boolean;
}

export interface ShareSingleReturn {
  message: string;
}

export interface Options {
  url?: string;
  urls?: string[];
  type?: string;
  message?: string;
  title?: string;
  subject?: string;
  filename?: string;
  excludedActivityTypes?: string;
  failOnCancel?: boolean;
  showAppsToView?: boolean;
}
export interface MultipleOptions {
  url?: string;
  urls: string[];
  type?: string;
  message?: string;
  title?: string;
  subject?: string;
  excludedActivityTypes?: string;
  failOnCancel?: boolean;
  showAppsToView?: boolean;
}

export type SupportedSocialApps =
  | 'facebook'
  | 'pagesmanager'
  | 'twitter'
  | 'whatsapp'
  | 'instagram'
  | 'googleplus'
  | 'email';

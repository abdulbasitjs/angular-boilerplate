export interface CrawlerStatsModule {
  TOTAL_STATS?: { [key: string]: any };
  COMPARISON?: { [key: string]: any };
  SEARCH_URL?: { [key: string]: any };
  TIMELINE?: { [key: string]: any };
}

export interface SNETStatsModule {
  TOTAL_STATS?: { [key: string]: any };
  DETECTION?: { [key: string]: any };
  COMPARISON?: { [key: string]: any };
  LIVE_PREVIEW?: { [key: string]: any };
  SEARCH_URL?: { [key: string]: any };
  SUBMIT_URL?: { [key: string]: any };
  TIMELINE?: { [key: string]: any };
  HISTORICAL_TREND?: { [key: string]: any };
  URL_JOURNEY?: { [key: string]: any };
  MARK_FP?: { [key: string]: any };
  MARK_FN?: { [key: string]: any };
}

export interface VEYEStatsModule {
  TOTAL_STATS?: { [key: string]: any };
  TIMELINE?: { [key: string]: any };
}

export interface SDRStatsModule {
  TOTAL_STATS?: { [key: string]: any };
  COMPARISON?: { [key: string]: any };
  TIMELINE?: { [key: string]: any };
}

export interface DNETStatsModule {
  TOTAL_STATS?: { [key: string]: any };
  COMPARISON?: { [key: string]: any };
  TIMELINE?: { [key: string]: any };
}

export interface DomainListingModule {
  WHITELIST?: { [key: string]: any };
  ASSOC_BRANDS?: { [key: string]: any };
  EXEMPTIONS?: { [key: string]: any };
  BLACKLIST?: { [key: string]: any };
  DDNS?: { [key: string]: any };
  CONTENTHOST?: { [key: string]: any };
  BRANDS?: { [key: string]: any };
  TRUSTED_ORGS?: { [key: string]: any };
}

export interface FilterListingModule {
  GREY_TOKEN?: { [key: string]: any };
  BLACK_URI?: { [key: string]: any };
  WHITE_PCRE?: { [key: string]: any };
  REDIRECTOR_PCRE?: { [key: string]: any };
  BLACK_REGEX?: { [key: string]: any };
  BLACK_PCRE?: { [key: string]: any };
}

export interface GlobalWhiteListModule {
  GLOBAL?: { [key: string]: any };
  CUSTOMER?: { [key: string]: any };
}

export interface RegexPortalModule {
  REGEX_PORTAL?: { [key: string]: any };
}

export interface SREPStatsModule {
  TOTAL_STATS?: { [key: string]: any };
  URL_REPUTE?: { [key: string]: any };
  HOST_REPUTE?: { [key: string]: any };
  TIMELINE?: { [key: string]: any };
  SYNC_LAG?: { [key: string]: any };
}

export interface CloudSettingsModule {
  RTPDC?: { [key: string]: any };
  SCS2?: { [key: string]: any };
  SNET?: { [key: string]: any };
  CAAS?: { [key: string]: any };
  SREP?: { [key: string]: any };
}

export interface UserManagementModule {
  USER_MANAGEMENT?: { [key: string]: any };
  ACCESS_CONTROL?: { [key: string]: any };
}

export interface CloudWatchModule {
  SEARCH?: { [key: string]: any };
  PRODINSIGHTS?: { [key: string]: any };
}

export interface UserPermission {
  CRAWLER_STATS?: CrawlerStatsModule;
  SNET_STATS?: SNETStatsModule;
  VEYE_STATS?: VEYEStatsModule;
  SDR_STATS?: SDRStatsModule;
  DENET_STATS?: DNETStatsModule;
  DOMAIN_LISTINGS?: DomainListingModule;
  FILTER_LISTINGS?: FilterListingModule;
  GLOBAL_WHITELIST?: GlobalWhiteListModule;
  REGEX_PORTAL?: RegexPortalModule;
  SREP_STATS?: SREPStatsModule;
  CLOUD_SETTINGS?: CloudSettingsModule;
  USER_MANAGEMENT?: UserManagementModule;
  CLOUD_WATCH?: CloudWatchModule;
}

export interface User {
  name: string;
  email: string;
  role: number;
  status: number;
  mtime: string;
  ctime: string;
  last_access: string;
  api_access: string;
  acl: Array<any>;
  authkey: string;
  permissions: UserPermission;
}

import * as fromAuth from '../actions/auth.action';
import { User } from 'src/app/modules/auth/models/user.mode';
export interface AuthState {
  user: User;
  loaded: boolean;
  loading: boolean;
}

export const initialState: AuthState = {
  user: {
    name: 'muhammad.a.3456',
    email: 'muhammad.a.3456@slashnext.net',
    role: 1,
    status: 1,
    mtime: '11-Aug-2022 13:08 UTC',
    ctime: '10-Apr-2019 11:07 UTC',
    permissions: {
      CRAWLER_STATS: {
        TOTAL_STATS: {},
        COMPARISON: {},
        SEARCH_URL: {},
        TIMELINE: {},
      },
      SNET_STATS: {
        TOTAL_STATS: {},
        DETECTION: {},
        COMPARISON: {},
        LIVE_PREVIEW: {},
        SEARCH_URL: {},
        SUBMIT_URL: {},
        TIMELINE: {},
        HISTORICAL_TREND: {},
        URL_JOURNEY: {},
        MARK_FP: {},
        MARK_FN: {},
      },
      VEYE_STATS: {
        TOTAL_STATS: {},
        TIMELINE: {},
      },
      SDR_STATS: {
        TOTAL_STATS: {},
        COMPARISON: {},
        TIMELINE: {},
      },
      DENET_STATS: {
        TOTAL_STATS: {},
        COMPARISON: {},
        TIMELINE: {},
      },
      DOMAIN_LISTINGS: {
        WHITELIST: {
          write: true,
        },
        ASSOC_BRANDS: {
          write: true,
        },
        EXEMPTIONS: {
          write: true,
        },
        BLACKLIST: {
          write: true,
        },
        DDNS: {
          write: true,
        },
        CONTENTHOST: {
          write: true,
        },
        BRANDS: {
          write: true,
        },
        TRUSTED_ORGS: {
          write: true,
        },
      },
      FILTER_LISTINGS: {
        GREY_TOKEN: {
          write: true,
        },
        BLACK_URI: {
          write: true,
        },
        WHITE_PCRE: {
          write: true,
        },
        REDIRECTOR_PCRE: {
          write: true,
        },
        BLACK_REGEX: {},
        BLACK_PCRE: {},
      },
      GLOBAL_WHITELIST: {
        GLOBAL: {
          write: true,
        },
        CUSTOMER: {
          write: true,
        },
      },
      REGEX_PORTAL: {
        REGEX_PORTAL: {
          write: true,
        },
      },
      SREP_STATS: {
        TOTAL_STATS: {},
        URL_REPUTE: {},
        HOST_REPUTE: {},
        TIMELINE: {},
        SYNC_LAG: {},
      },
      CLOUD_SETTINGS: {
        RTPDC: {
          write: true,
        },
        SCS2: {
          write: true,
        },
        SNET: {
          write: true,
        },
        CAAS: {
          write: true,
        },
        SREP: {
          write: true,
        },
      },
      USER_MANAGEMENT: {
        USER_MANAGEMENT: {},
        ACCESS_CONTROL: {},
      },
      CLOUD_WATCH: {
        SEARCH: {},
        PRODINSIGHTS: {},
      },
    },
    last_access: '22-Aug-2022 11:38 UTC',
    api_access: '2022-08-22 11:38:20.082000',
    acl: [],
    authkey: '26IA67H81UN3D69VW6YU28T98XJ4ZGDUEQCWMIALTMNI5HGMD6MHZCU4JHXQED2C',
  },
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromAuth.AuthActions
): AuthState {
  switch (action.type) {
    case fromAuth.AUTH_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromAuth.AUTH_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromAuth.AUTH_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default:
      return { ...state };
  }
}

export const getUserLoading = (state: AuthState) => state.loading;
export const getUserLoaded = (state: AuthState) => state.loaded;
export const getCurrentUser = (state: AuthState) => state.user;

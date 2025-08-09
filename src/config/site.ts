import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://piyush-choudhari.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
];

export const SOURCE_CODE_GITHUB_REPO = "capybara-brain346/capybara.com";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/capybara-brain346/capybara.com";

export const UTM_PARAMS = {
  utm_source: "piyush-choudhari.vercel.app",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};

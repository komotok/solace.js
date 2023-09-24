import IGuild from "../interfaces/ApiGuild";
import Emoji from "./Emoji";
import Role from "./Role";
import Sticker from "./Sticker";
import WelcomeScreen from "./WelcomeScreen";
export default class Guild {
    afkChannelId: string | null;
    afkTimeout: number;
    applicationId: string | null;
    approximateMemberCount: number | null;
    approximatePresenceCount: number | null;
    banner: string | null;
    defaultMessageNotifications: number;
    description: string | null;
    discoverySplash: string | null;
    emojis: Emoji[];
    explicitContentFilter: number;
    features: string[];
    icon: string | null;
    iconHash: string | null;
    id: string;
    maxMembers: number | null;
    maxPresences: number | null;
    maxStageVideoChannelUsers: number | null;
    maxVideoChannelUsers: number | null;
    mfaLevel: number;
    name: string;
    nsfwLevel: number;
    owner: boolean;
    ownerId: string;
    permissions: string | null;
    preferredLocale: string;
    premiumProgressBarEnabled: boolean;
    premiumSubscriptionCount: number | null;
    premiumTier: number;
    publicUpdatesChannelId: string | null;
    region: string | null;
    roles: Role[];
    rulesChannelId: string | null;
    safetyAlertsChannelId: string | null;
    splash: string | null;
    stickers: Sticker[] | undefined;
    systemChannelFlags: number;
    systemChannelId: string | null;
    vanityUrlCode: string | null;
    verificationLevel: number;
    welcomeScreen: WelcomeScreen | null;
    widgetChannelId: string | null;
    widgetEnabled: boolean;
    constructor(data: IGuild);
}

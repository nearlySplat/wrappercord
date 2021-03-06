import { APIEmbed, Snowflake } from 'discord-api-types';
import { Message } from './structures/Message.js';

export type ImageFormat = 'webp' | 'gif' | 'jpg' | 'jpeg' | 'png';
export type ImageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
export interface ImageURLOptions {
  format: ImageFormat;
  size: ImageSize;
  dynamic: boolean;
}
export { UserPremiumType } from 'discord-api-types';
export interface MessageAllowedMentions {
  parse?: ('user' | 'role' | 'everyone')[];
  users?: Snowflake[];
  roles?: Snowflake[];
  /** @default true */
  repliedUser?: boolean;
}
export type MessageContent = string;
export interface MessageOptions {
  content?: MessageContent;
  embed?: APIEmbed;
  allowedMentions?: MessageAllowedMentions;
  replyTo?: MessageReplyTo;
}

export type MessageReplyTo =
  | Message
  | Snowflake
  | {
      id: Snowflake;
      channel: Snowflake;
      guild?: Snowflake;
      failIfNotExists?: boolean;
    };
